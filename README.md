# CryptoFile ✍🏻📋💻

![GitHub repo size](https://img.shields.io/github/repo-size/dfleper/CryptoFile?logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/dfleper/CryptoFile?color=blue&label=last-commit&logo=github&logoColor=white)

## Code 🔡
- "crypto" and "fs" are Node.js modules. 
- "crypto" provides cryptographic functions and "fs" allows interacting with the file system. 
- "salt" is a random sequence used to protect against dictionary attacks.
- "iterations" is the number of iterations to be used in the key derivation process.
- "deriveKey" takes a password, a salt and a number of iterations, and uses the PBKDF2 algorithm with SHA-256 to derive a 256-bit key.

## EncryptFile: 🗨
- Generates a random 16-byte initialisation vector (IV).
- Creates a cipher using AES-256-CBC with the derived key and IV.
- Uses file streams to read the input file and write the encrypted file.
- input.pipe(cipher).pipe(output) connects the file read stream, the cipher and the file write stream.
- It uses a finish event on the output stream to ensure that the file has been completely written before appending the salt and IV to the end of the encrypted file.

## DecryptFile: 💬
- Reads the entire contents of the encrypted file into a buffer.
- Extracts the salt and IV from the end of the encrypted file.
- Extracts the encrypted data from the buffer.
- Derives the key using the provided password, salt and number of iterations.
- Creates a decryptor using AES-256-CBC with the derived key and the IV.
- Decrypts the data using the decryptor.
- Writes the decrypted data to a new output file.

## Código: 🔡
- "crypto" y "fs" son módulos de Node.js. 
- "crypto" proporciona funciones criptográficas y "fs" permite interactuar con el sistema de archivos. 
- "salt" es una secuencia aleatoria que se usa para proteger contra ataques de diccionario.
- "iterations" es el número de iteraciones que se usarán en el proceso de derivación de clave.
- "deriveKey" toma una contraseña, una sal y un número de iteraciones, y usa el algoritmo PBKDF2 con SHA-256 para derivar una clave de 256 bits.

## Encriptar: 🗨
- Genera un vector de inicialización (IV) aleatorio de 16 bytes.
- Crea un cifrador utilizando AES-256-CBC con la clave derivada y el IV.
- Usa streams de archivos para leer el archivo de entrada y escribir el archivo cifrado.
- input.pipe(cipher).pipe(output) conecta el flujo de lectura del archivo, el cifrador y el flujo de escritura del archivo.
- Usa un evento finish en el flujo de salida para asegurarse de que el archivo se ha escrito completamente antes de añadir la sal y el IV al final del archivo cifrado.

## Desencriptar: 💬
- Lee todo el contenido del archivo cifrado en un buffer.
- Extrae la sal y el IV desde el final del archivo cifrado.
- Extrae los datos cifrados desde el buffer.
- Deriva la clave usando la contraseña proporcionada, la sal y el número de iteraciones.
- Crea un descifrador utilizando AES-256-CBC con la clave derivada y el IV.
- Desencripta los datos utilizando el descifrador.
- Escribe los datos desencriptados en un nuevo archivo de salida.

## Video / Video

https://github.com/dfleper/CryptoFile/assets/124105822/ab72aebd-c6b4-4d8f-a2a0-aaf0314870e9

## Requirements / Requisitos
#### 🛠 [Visual Studio Code](https://code.visualstudio.com/) 
#### 🛠 [Node](https://nodejs.org/) 
#### 🛠 [crypto](https://nodejs.org/api/crypto.html#crypto)
#### 🛠 [fs](https://nodejs.org/api/fs.html)

-----
