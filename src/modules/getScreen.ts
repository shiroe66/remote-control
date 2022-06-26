import Jimp from "jimp"
import { getMousePos, getScreenSize, screen } from "robotjs"
import { Duplex } from "stream"
import { RESULT } from "../helpers/constants"

export const getScreen = async (duplex: Duplex) => {
  let { x, y } = getMousePos()
  const { width, height } = getScreenSize()
  const size = 200

  // Вычисления для краёв экрана
  if (x + size > width) {
    x = width - size / 2
  }

  if (y + size > height) {
    y = height - size / 2
  }

  if (y - size < 0) {
    y = size / 2
  }

  if (x - size < 0) {
    x = size / 2
  }

  const capture = screen.capture(x - 100, y - 100, size, size)

  const image = new Jimp(capture.width, capture.height)
  image.bitmap.data = capture.image

  let red: any, green: any, blue: any
  capture.image.forEach((byte: any, i: number) => {
    switch (i % 4) {
      case 0:
        return (blue = byte)
      case 1:
        return (green = byte)
      case 2:
        return (red = byte)
      case 3:
        image.bitmap.data[i - 3] = red
        image.bitmap.data[i - 2] = green
        image.bitmap.data[i - 1] = blue
        image.bitmap.data[i] = 255
    }
  })

  const buffer = await image.getBufferAsync(Jimp.MIME_PNG)
  duplex.write(`prnt_scrn ${buffer.toString("base64")}\0`)
  console.log(RESULT, "prnt_scrn completed successful")
}
