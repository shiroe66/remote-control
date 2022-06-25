import { RawData, WebSocket } from "ws"
import { getScreen } from "../modules/getScreen"

export const prntEvent = (msg: RawData, ws: WebSocket) => {
  getScreen(ws)
}
