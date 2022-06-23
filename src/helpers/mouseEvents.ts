import { getMousePosition } from "../modules/getMousePosition"

export const mouseEvents = (action: string) => {
  const [event, px] = action.split(" ")

  switch (event) {
    case "position":
      getMousePosition()
      break
  }
}
