import { getMousePos } from "robotjs"

export const getMousePosition = () => {
  const { x, y } = getMousePos()
  console.log(`Mouse position: x: ${x}, y: ${y}`)
}
