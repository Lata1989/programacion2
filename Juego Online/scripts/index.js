// Importo todos los modulos de las dependencias para poder ejecutar todo en este javascript
const express = require("express");
const app = express();

const path = require("path");
const http = require("http");
const {Server} = require("socket.io");


// Creacion del servidor
const server = http.createServer(app);

const io = new Server(server);

// Le paso a express la direccion donde esta el html
app.use(express.static(path.resolve("")));

app.get("/", (req, res) => {
    return res.sendFile("index.html")
})

server.listen(3000, () => {
    console.log("Conectado al puerto 3000");
});