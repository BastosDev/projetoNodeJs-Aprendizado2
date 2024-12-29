const crypto = require("node:crypto")
const { cursorTo } = require("node:readline")

const key = crypto.randomBytes(12).toString("base64")
console.log(key)

const uuid = crypto.randomUUID()

console.log(uuid)

const { privateKey, publicKey } = crypto.generateKeyPairSync(
    "rsa", { modulusLength: 2048 }
)

console.log(publicKey)
console.log(privateKey)