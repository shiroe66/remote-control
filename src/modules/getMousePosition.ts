import { getMousePos } from "robotjs"
import { WebSocket } from "ws"

export const getMousePosition = (ws: WebSocket) => {
  const { x, y } = getMousePos()
  ws.send(`mouse_position ${x},${y}`)
  console.log(`Result: mouse_position at x: ${x}, at y: ${y}`)
}
