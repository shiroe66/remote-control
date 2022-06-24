import "dotenv/config"
import fs from "fs"
import path from "path"
import http from "http"
import { WebSocketServer } from "ws"
import { mouseEvents } from "./helpers/mouseEvents"
import { drawEvents } from "./helpers/drawEvents"

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

const wss = new WebSocketServer({ port: 8080 })

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    const [message, action] = msg.toString().split("_")

    switch (message) {
      case "mouse":
        mouseEvents(msg, action, ws)
        break
      case "draw":
        drawEvents(msg, action, ws)
        break
      case "prnt":
        break
    }

    console.log(msg.toLocaleString())
  })
})
