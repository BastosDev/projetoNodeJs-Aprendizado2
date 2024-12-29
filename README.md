# Sobre a Aula
- Navegar pela documentação oficial do node
- npm i node mon para baixar o pacote onde nos permite ver as alterações no codigo sem necessariamente ficar parando o servidor
## Imporatremos o DNS do nodeJS
- cria uma var const dns = require("node:dns")
- adiciona uma var para detectar o dns
    - const searchUrl = "url"
- criamos uma function para executar as operações
    - async function bootstrap () {
            - adiciona um console time para ver o tempo de resposta em dns padrão
        console.time("Pesquisando url por DNS padrão")
            - cria uma const para puxar o dns ipv4
        const addresses = await dns.promises.resolve4(urlSearch)
            - timeEnd para ver o tempo de resposta ao final da operação
        console.timeEnd("Pesquisando url por DNS padrão")
            - puxa a resposta pro console.log
        console.log(addresses)
            - define uma const ns para buscar os name servers da url
        const nameServers = await dns.promises.resolveNs(urlSearch)
            - puxa a resposta pro console.log
        console.log(nameServers)
            - criamos uma var const ipNs para transformar o ip do nS em ipv4
        const ipNs = await dns.promises.resolve4(nameServers[1])
            - criamos uma const resolver para comparar com servidores especificos
        const resolver = new dns.Resolver()
        resolver.setServers(ipNs)
            - console time para pesquisar o ping da dns especifica solicitada no resolver
        console.time("Pesquisando url por DNS especifica")
            - const addressWithResolve para puxar o ip do address com o resolve com método callback pois neste caso o promises não funciona
        const addressesWithResolve = await resolver.resolve4(urlSearch, (error, addresses) => {
            if (error) { 
                console.error("Não foi possível encontrar o ipv4")
            }
        
            console.timeEnd("Pesquisando url por DNS especifica")
            - terminamos de medir o ping da dns especifica
            console.log(addresses)
            - puxamos o resultado do ip buscado com resolve
    })
}


## Http no nodeJS
