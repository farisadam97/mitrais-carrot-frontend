var cryptoJS = require("crypto-js")

const DefaultConfig = {
    base_api : "http://localhost:2022/api/v1"
}

const encryptData = (data) => {
    var encryptedData = cryptoJS.AES.encrypt(data,"MiTraISCaRrOtJoGja").toString()
    return encryptedData
}

const decryptData = (data) => {
    var decryptedData = cryptoJS.AES.decrypt(data,"MiTraISCaRrOtJoGja")
    return decryptedData
}

export default { DefaultConfig, encryptData, decryptData}