const { readFileSync } = require('fs')
const http = require('http')

const server = http.createServer((req,res) =>{
    const HOME = readFileSync("./navbar-app/index.html")
    const HOMESTYLE = readFileSync("./navbar-app/styles.css")
    const SCRIPT    = readFileSync("./navbar-app/browser-app.js")
    const IMAGE     = readFileSync("./navbar-app/logo.svg")
    
    if (req.url === "/") {
        res.writeHead(200, {"content-type" : "text/html"})
        res.write(HOME)
        res.end()
    }
    else if (req.url === "/styles.css") { //jangan pakai titik sebelum /
        res.writeHead(200, {"content-type" : "text/css"})
        res.write(HOMESTYLE)
        res.end()
    }
    else if (req.url === "/logo.svg") { //jangan pakai titik sebelum /
        res.writeHead(200, {"content-type" : "image/svg+xml"})
        res.write(IMAGE)
        res.end()
    }
    else if (req.url === "/browser-app.js") { //jangan pakai titik sebelum /
        res.writeHead(200, {"content-type" : "text/script"})
        res.write(SCRIPT)
        res.end()
    }
    
    else{
        res.writeHead(404, {"content-type":"text/html"})
        res.write("<h1>Halam tidak ditemukan 404</h1>")
    }
    
    
})

server.listen(5000)