import { getMousePos } from "robotjs"
import { WebSocket } from "ws"
import { RESULT } from "../helpers/constants"

export const getMousePosition = (ws: WebSocket) => {
  const { x, y } = getMousePos()
  ws.send(`mouse_position ${x},${y}`)
  console.log(RESULT, `mouse_position at x: ${x}, at y: ${y}`)
}
