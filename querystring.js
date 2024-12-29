const querystring = require("node:querystring")
const url = require("node:url")

const baseUrl = "https://site-viajem.com.br"

const uri = querystring.stringify({
    destino: "Rio de Janeiro",
    periodo: "Verão"
})

const fullurl = `${baseUrl}/${uri}`

console.log(fullurl)

const parsedUrl = querystring.parse(uri)
console.log(uri)
console.log(parsedUrl)
console.log(parsedUrl.destino)
console.log(url.parse(fullurl))

const uri2 = querystring.escape("nome= São Paulo&teste= qualquer coisa")
console.log(uri2)
const unescapedUri2 = querystring.unescape(uri2)
console.log(unescapedUri2)