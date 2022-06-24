import { getMousePos } from "robotjs"
import { WebSocket } from "ws"

export const getMousePosition = (ws: WebSocket) => {
  const { x, y } = getMousePos()
  ws.send(`mouse_position ${x},${y}`)
}
