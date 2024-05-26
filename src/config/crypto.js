const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encryptCustom(text) {
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decryptCustom(encryptedText) {
    const ivBuffer = Buffer.from(encryptedText.iv, 'hex');
    const encryptedData = Buffer.from(encryptedText.encryptedData, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), ivBuffer);
    let decrypted = decipher.update(encryptedData);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

module.exports = {
    encryptCustom,
    decryptCustom
};