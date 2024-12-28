const dns = require("node:dns")
const urlSearch = "google.com"

async function bootstrap() {

    console.time("Pesquisando url por DNS padrão")

    const addresses = await dns.promises.resolve4(urlSearch)
    console.timeEnd("Pesquisando url por DNS padrão")
    console.log(addresses)

    const nameServers = await dns.promises.resolveNs(urlSearch)
    console.log(nameServers)
}

bootstrap()