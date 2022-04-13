var cryptoJS = require("crypto-js")

export const DefaultConfig = {
    base_api : "http://localhost:2022/api/v1"
}

export const encryptData = (data) => {
    var encryptedData = cryptoJS.AES.encrypt(data,"MiTraISCaRrOtJoGja").toString()
    return encryptedData
}

export const decryptData = (data) => {
    var decryptedData = cryptoJS.AES.decrypt(data,"MiTraISCaRrOtJoGja")
    return decryptedData
}

// export default {DefaultConfig, encryptData,decryptData}