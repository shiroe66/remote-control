import WebSocket, { RawData } from "ws"
import { drawCircle } from "../modules/drawCircle"
import { drawRectangle } from "../modules/drawRectangle"
import { drawSquare } from "../modules/drawSquare"

export const drawEvents = (msg: RawData, action: string, ws: WebSocket) => {
  const [event, width, length] = action.split(" ")

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
}