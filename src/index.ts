import fs from "fs"
import path from "path"
import http from "http"
import Jimp from "jimp"
import robot from "robotjs"
import { WebSocketServer } from "ws"
import "dotenv/config"

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

const HTTP_PORT = process.env.WS_PORT
console.log(`Start static http server on the ${HTTP_PORT} port!`)
httpServer.listen(HTTP_PORT)
