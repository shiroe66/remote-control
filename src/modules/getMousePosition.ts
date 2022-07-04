import { getMousePos } from "robotjs"
import { Duplex } from "stream"
import { RESULT } from "../helpers/constants"

export const getMousePosition = (duplex: Duplex) => {
  const { x, y } = getMousePos()
  duplex.write(`mouse_position ${x},${y}`)
  console.log(RESULT, `mouse_position at x: ${x}, at y: ${y}`)
}
