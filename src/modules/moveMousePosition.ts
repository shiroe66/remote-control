import { getMousePos, moveMouse } from "robotjs"

export const moveMousePosition = (event: string, px: number) => {
  const { x, y } = getMousePos()

  switch (event) {
    case "up":
      moveMouse(x, y - px)
      break
    case "down":
      moveMouse(x, y + px)
      break
    case "left":
      moveMouse(x - px, y)
      break
    case "right":
      moveMouse(x + px, y)
      break
  }
  console.log(`Result: mouse moved ${event} to ${px}px`)
}
