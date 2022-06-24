import WebSocket, { RawData } from "ws"
import { drawCircle } from "../modules/drawCircle"

export const drawEvents = (msg: RawData, action: string, ws: WebSocket) => {
  const [event, px] = action.split(" ")

  if (event === "circle") {
    drawCircle(Number(px))
  }

  ws.send(`${msg.toString()}\0`)
}
