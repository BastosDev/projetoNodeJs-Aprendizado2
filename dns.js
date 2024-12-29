const { error } = require("node:console")
const dns = require("node:dns")
const urlSearch = "google.com"

async function bootstrap() {

    console.time("Pesquisando url por DNS padrão")

    const addresses = await dns.promises.resolve4(urlSearch)
    console.timeEnd("Pesquisando url por DNS padrão")
    console.log(addresses)

    const nameServers = await dns.promises.resolveNs(urlSearch)
    console.log(nameServers)

    const ipNs = await dns.promises.resolve4(nameServers[1])

    const resolver = new dns.Resolver()
    resolver.setServers(ipNs)
    console.time("Pesquisando url por DNS especifica")

    const addressesWithResolve = await resolver.resolve4(urlSearch, (error, addresses) => {
        if (error) { 
            console.error("Não foi possível encontrar o ipv4")
        }
        
        console.timeEnd("Pesquisando url por DNS especifica")
        console.log(addresses)
    })
}

bootstrap()