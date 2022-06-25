import { getMousePos, moveMouse } from "robotjs"
import { ERROR, RESULT } from "../helpers/constants"

export const moveMousePosition = (event: string, px: number) => {
  return new Promise<void>((resolve, reject) => {
    // Обработка ошибки на случай пустого Input
    if (Number.isNaN(px)) {
      reject()
    } else {
      resolve()
    }
  })
    .then(() => {
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
      console.log(RESULT, `mouse moved ${event} to ${px}px`)
    })
    .catch(() => console.log(RESULT, ERROR))
}
