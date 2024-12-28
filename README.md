# Sobre a Aula

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
     }
- 
    