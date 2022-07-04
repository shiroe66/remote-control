import { Duplex } from "stream"
import { RawData } from "ws"
import { getMousePosition } from "../modules/getMousePosition"
import { moveMousePosition } from "../modules/moveMousePosition"

export const mouseEvents = (msg: RawData, action: string, duplex: Duplex) => {
  const [event, px] = action.split(" ")

  if (event === "position") {
    return getMousePosition(duplex)
  }

  if (event === "up" || "down" || "right" || "left") {
    moveMousePosition(event, Number(px), duplex, msg)
  }
}
