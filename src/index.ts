import "dotenv/config"
import fs from "fs"
import http from "http"
import path from "path"
import { createWebSocketStream, WebSocketServer } from "ws"
import { RECEIVED } from "./helpers/constants"
import { drawEvents } from "./helpers/drawEvents"
import { mouseEvents } from "./helpers/mouseEvents"
import { getScreen } from "./modules/getScreen"

export const httpServer = http.createServer(function (req, res) {
  const __dirname = path.resolve(path.dirname(""))
  const file_path =
    __dirname + (req.url === "/" ? "/front/index.html" : "/front" + req.url)
  fs.readFile(file_path, function (err, data) {
    if (err) {
      res.writeHead(404)
      res.end(JSON.stringify(err))
      return
    }
    res.writeHead(200)
    res.end(data)
  })
})

const HTTP_PORT = process.env.PORT
console.log(`Start static http server on the ${HTTP_PORT} port!`)
httpServer.listen(HTTP_PORT)

const SOCKET_PORT = Number(process.env.WS_PORT) || 8080
const wss = new WebSocketServer({ port: SOCKET_PORT })

wss.on("connection", (ws) => {
  console.log(`Websocket started on the ${SOCKET_PORT} port!`)

  const duplex = createWebSocketStream(ws, {
    encoding: "utf-8",
    decodeStrings: false,
  })

  ws.on("message", (msg) => {
    const [command, action] = msg.toString().split("_")
    console.log(RECEIVED, msg.toString())

    switch (command) {
      case "mouse":
        mouseEvents(msg, action, duplex)
        break
      case "draw":
        drawEvents(msg, action, duplex)
        break
      case "prnt":
        getScreen(duplex)
        break
    }
  })
})

process.on("SIGINT", () => {
  process.stdout.write("Websocket closing\n")
  wss.close()
  process.exit(0)
})
