import { getMousePos, mouseToggle, moveMouseSmooth } from "robotjs"

export const drawRectangle = (width: number, length: number) => {
  const { x, y } = getMousePos()

  mouseToggle("down")
  moveMouseSmooth(x + width, y)
  moveMouseSmooth(x + width - 2, y + length + 2)
  moveMouseSmooth(x - 1, y + length)
  moveMouseSmooth(x, y)
  mouseToggle("up")
}
