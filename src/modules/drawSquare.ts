import {
  dragMouse,
  getMousePos,
  mouseToggle,
  moveMouseSmooth,
  setMouseDelay,
} from "robotjs"

export const drawSquare = (px: number) => {
  setMouseDelay(3)
  const { x, y } = getMousePos()

  moveMouseSmooth(x, y + px)
  mouseToggle("down", "right")
  moveMouseSmooth(x + px, y)
}
