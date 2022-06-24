import WebSocket, { RawData } from "ws"
import { drawCircle } from "../modules/drawCircle"
import { drawSquare } from "../modules/drawSquare"

export const drawEvents = (msg: RawData, action: string, ws: WebSocket) => {
  const [event, px] = action.split(" ")

  if (event === "circle") {
    drawCircle(Number(px))
  }

  if (event === "square") {
    drawSquare(Number(px))
  }

  ws.send(`${msg.toString()}\0`)
}
