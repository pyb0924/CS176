const http = require('http')
const fs = require("fs");
const nanoid = require('nanoid')
const port = 3000;


const id = nanoid.nanoid()
const server = http.createServer((req, res) => {
    let url = req.url.replace(/^\//, '');
    if (!url) {
        url = "index.html";
    }
    let param = url.split('?');
    if (!fs.existsSync(param[0])) {
        res.statusCode = 404;
        res.end();
    } else {
        switch (param[1]) {
            case "max-age":
                res.writeHead(200, "OK", {"Cache-Control": "max-age=999"});
                break;
            case "no-cache":
                if (req.headers['if-none-match'] === id) {
                    res.statusCode = 304;
                    res.end();
                } else {
                    res.writeHead(200, "OK", {"Cache-Control": "no-cache", "ETag": id});
                }
                break;
            case "no-store":
                res.writeHead(200, "OK", {"Cache-Control": "no-store"});
                break;
        }
        fs.createReadStream(param[0]).pipe(res);
    }
})

server.listen(port, () => {
    console.log(`正在运行 http://localhost:${port}/`)
})