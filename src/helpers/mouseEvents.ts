import WebSocket, { RawData } from "ws"
import { getMousePosition } from "../modules/getMousePosition"
import { moveMousePosition } from "../modules/moveMousePosition"

export const mouseEvents = (msg: RawData, action: string, ws: WebSocket) => {
  const [event, px] = action.split(" ")

  if (event === "position") {
    return getMousePosition(ws)
  }

  if (event === "up" || "down" || "right" || "left") {
    moveMousePosition(event, Number(px), ws, msg)
  }
}
