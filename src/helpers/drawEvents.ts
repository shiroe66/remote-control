import WebSocket, { RawData } from "ws"
import { drawCircle } from "../modules/drawCircle"
import { drawRectangle } from "../modules/drawRectangle"
import { drawSquare } from "../modules/drawSquare"
import { ERROR, RESULT } from "./constants"

export const drawEvents = (msg: RawData, action: string, ws: WebSocket) => {
  const [event, width, length] = action.split(" ")

  // Обработка ошибки на случай пустого Input
  if (width === "null" || length === "null") {
    console.log(RESULT, ERROR)
  } else {
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
  }
}
