import WebSocket, { RawData } from "ws"
import { drawCircle } from "../modules/drawCircle"
import { drawRectangle } from "../modules/drawRectangle"
import { drawSquare } from "../modules/drawSquare"
import { DrawCommand } from "../types/drawEvents.types"
import { ERROR, RESULT } from "./constants"

export const drawEvents = (msg: RawData, action: string, ws: WebSocket) => {
  return new Promise<DrawCommand>((resolve, reject) => {
    const [event, width, length] = action.split(" ")

    // Обработка ошибки на случай пустого Input
    if (width === "null") {
      reject()
    } else {
      resolve({ event, width })
    }
  })
    .then(({ event, width }) => {
      if (event === "circle") {
        drawCircle(Number(width))
      }

      if (event === "square") {
        drawSquare(Number(width))
      }

      if (event === "rectangle") {
        drawRectangle(Number(width), Number(length))
      }

      ws.send(`${msg.toString()}\0`)
      console.log(RESULT, `${event} drawed`)
    })
    .catch(() => {
      console.log(RESULT, ERROR)
    })
}
