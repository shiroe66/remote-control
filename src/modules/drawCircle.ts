import { dragMouse, getMousePos } from "robotjs"

export const drawCircle = (radius: number) => {
  const { x, y } = getMousePos()

  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const posX = x + radius * Math.cos(i)
    const posY = y + radius * Math.sin(i)

    dragMouse(posX, posY)
  }
}
