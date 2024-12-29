const http = require("node:http")
const port = 6000

const server = http.createServer((request, response) => {
    const { method, statusCode, url } = request

    if (url === "/") {
        return response.write("Hello from node")
    }
})


server.listen(port, "localhost", () => {

    console.log(`server running on https://localhost:/${port}`)

})
