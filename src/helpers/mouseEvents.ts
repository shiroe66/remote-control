import { getMousePosition } from "../modules/getMousePosition"
import { moveMousePosition } from "../modules/moveMousePosition"

export const mouseEvents = (action: string) => {
  const [event, px] = action.split(" ")

  if (event === "position") {
    getMousePosition()
  }

  if (event === "up" || "down" || "right" || "left") {
    moveMousePosition(event, Number(px))
  }
}
