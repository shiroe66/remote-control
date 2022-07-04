import {
  getMousePos,
  mouseToggle,
  moveMouseSmooth,
  setMouseDelay,
} from "robotjs"

export const drawSquare = (px: number) => {
  setMouseDelay(3)
  const { x, y } = getMousePos()

  mouseToggle("down")
  moveMouseSmooth(x + px, y)
  moveMouseSmooth(x + px - 2, y + px + 2)
  moveMouseSmooth(x - 1, y + px)
  moveMouseSmooth(x, y)
  mouseToggle("up")
}
