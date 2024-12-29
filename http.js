const http = require("node:http")

const server = http.createServer( async (request, response) => {
    const { method, statusCode, url } = request

    const bodyPromise = new Promise((resolve, reject) => {
        let body 
        request.on("data", () => {  
            body = JSON.parse(data)

        })
        request.on("end" , data  => {
            resolve(body)
        })
    })

    const sports = ["soccer", "volley","basketball", "tennis"]

    if (url === "/") {
        response.write("<div><h1> Hello from node </h1> <p> http server <\p> </div>")
        response.end()
        return
    }

    if (url === "/api/sports") {
        if (method === "GET") {
        response.write(JSON.stringify(sports))
        response.end()
        return
        }

        if (method === "POST") {
            const body = await bodyPromise
            console.log(body)
        }
    }

    response.statusCode = 404
    response.write("Pagina não encontrada")
    response.end()
})


server.listen(3000, "localhost", () => {

    console.log(`server running on http://localhost:/3000`)

})
