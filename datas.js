const { DateTime, Interval } = require("luxon")

const agora = DateTime.now()
console.log(agora.month)
console.log(new Date().toLocaleString())
console.log(new Date().toLocaleString("pt-BR"))

const birthDay = DateTime.fromFormat("29/12/2005", "dd/MM/yyyy")
console.log(birthDay.day)
console.log(birthDay.month)
// console.log(new Date().getDate())

const idade = Interval.fromDateTimes(birthDay, agora).length("year")

console.log(Math.floor(idade)) 

const isoDate = "2024-12-29T18:34:14.117256Z"
const rfc = "Sun, 29 Dec 2024 18:35:02 GMT"

console.log(DateTime.fromISO(isoDate).toLocaleString())
console.log(DateTime.fromRFC2822(rfc).toLocaleString())