# Sobre a Aula
- Navegar pela documentação oficial do node
- npm i -D nodemon para baixar o pacote onde nos permite ver as alterações no codigo sem necessariamente ficar parando o servidor
- npx nodemon "file" para executar o script

- npm docs luxon 
    - para acessar a biblioteca do luxon

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
- Definir const http = require("node:http") para importar a biblioteca http do node
- Definimos uma const sports para definirmos quais esportes queremos mostrar na página
- Definimos uma const { resourceUsage } = require("node:process") para puxar o process da biblioteca node
- Definimos uma const server = http.createServer... para criar uma hospedagem local atraves de uma const - - - bodyPromises e um let body de forma assincrona
    - Utilizamos o if para se a url possuir apenas "/", direcionar para um http escrite : Hello from node http server
    - Abrimos um if para se a url possuir /api/sports ela definir outro if
        - No primeiro if, analisa se method é GET ou POST, caso seja GET, ele transforma a const sports em uma string JSON
        - No segundo if, se method === POST
            - Definimos uma const body de forma async, ou seja, com await
            - Definimos uma const { name }  = body de forma que seja um object
            - Dentro deste if colocamos outro para que sports seja questionado antes de sofrer uma alteração no poste
        - Finalizamos com respose write para escrever o name(object de sports) em letra minuscula e demos um response end e depois return
    - Terminamos o primeiro if com respose statusCode como 404, caso dê erro e caso dê erro ele retorna uma string que o correto seria um http com mensagem de erro e finalizamos com um response end
- Abrimos um server listen para definir a porta(3000) e o localhost, abrimos uma arrow function para determinar o console log como o site localhost para se ele iniciar, retornar a mensagem no console