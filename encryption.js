const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Configuración y constantes
const password = 'my_secure_password'; // Contraseña para la clave de cifrado
const salt = crypto.randomBytes(16);  // Sal aleatoria
const iterations = 100000;  // Iteraciones para la derivación de clave

// Función para derivar una clave de cifrado a partir de una contraseña
function deriveKey(password, salt, iterations) {
    return crypto.pbkdf2Sync(password, salt, iterations, 32, 'sha256');
}

// Función para encriptar el archivo
function encryptFile(inputFile, outputFile, key) {
    const iv = crypto.randomBytes(16);  // Vector de inicialización
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

    const input = fs.createReadStream(inputFile);
    const output = fs.createWriteStream(outputFile);

    input.pipe(cipher).pipe(output);

    output.on('finish', () => {
        fs.appendFileSync(outputFile, Buffer.concat([salt, iv]));
        console.log(`Archivo ${inputFile} encriptado a ${outputFile}`);
    });
}

// Función para desencriptar el archivo
function decryptFile(inputFile, outputFile, password) {
    const fileData = fs.readFileSync(inputFile);
    const salt = fileData.slice(-32, -16);  // Leer la sal desde el final del archivo
    const iv = fileData.slice(-16);  // Leer el IV desde el final del archivo
    const encryptedData = fileData.slice(0, -32);  // Leer los datos encriptados

    const key = deriveKey(password, salt, iterations);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

    const decryptedData = Buffer.concat([decipher.update(encryptedData), decipher.final()]);

    fs.writeFileSync(outputFile, decryptedData);
    console.log(`Archivo ${inputFile} desencriptado a ${outputFile}`);
}

// Ejemplo de uso
const inputFile = 'plain_text.txt';
const encryptedFile = 'encrypted_data.enc';
const decryptedFile = 'decrypted_text.txt';

const key = deriveKey(password, salt, iterations);

// Encriptar el archivo
encryptFile(inputFile, encryptedFile, key);

// Esperar unos segundos antes de desencriptar para asegurarse de que el archivo esté escrito completamente
setTimeout(() => {
    decryptFile(encryptedFile, decryptedFile, password);
}, 1000);
