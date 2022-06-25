import { getMousePos, moveMouse } from "robotjs"
import { RawData, WebSocket } from "ws"
import { ERROR, RESULT } from "../helpers/constants"

export const moveMousePosition = (
  event: string,
  px: number,
  ws: WebSocket,
  msg: RawData
) => {
  // Обработка ошибки на случай пустого Input
  if (Number.isNaN(px)) {
    console.log(RESULT, ERROR)
  } else {
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
    ws.send(`${msg.toString()}\0`)
    console.log(RESULT, `mouse moved ${event} to ${px}px`)
  }
}
