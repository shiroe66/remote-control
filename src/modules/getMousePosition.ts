import { getMousePos } from "robotjs"

export const getMousePosition = () => {
  const { x, y } = getMousePos()
  return `mouse_position ${x},${y}`
}
