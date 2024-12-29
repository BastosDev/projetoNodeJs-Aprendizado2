const http = require("node:http")

const server = http.createServer((request, response) => {
    const { method, statusCode, url } = request

    if (url === "/") {
        response.write("Hello from node")
        response.end()
    }
})


server.listen(3000, "localhost", () => {

    console.log(`server running on http://localhost:/3000`)

})
