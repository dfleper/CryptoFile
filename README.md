# CryptoFile ✍🏻📋💻

![GitHub repo size](https://img.shields.io/github/repo-size/dfleper/CryptoFile?logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/dfleper/CryptoFile?color=blue&label=last-commit&logo=github&logoColor=white)

## Code
- "crypto" and "fs" are Node.js modules. 
- "crypto" provides cryptographic functions and "fs" allows interacting with the file system. 
- "salt" is a random sequence used to protect against dictionary attacks.
- "iterations" is the number of iterations to be used in the key derivation process.
- "deriveKey" takes a password, a salt and a number of iterations, and uses the PBKDF2 algorithm with SHA-256 to derive a 256-bit key.

## EncryptFile:
- Generates a random 16-byte initialisation vector (IV).
- Creates a cipher using AES-256-CBC with the derived key and IV.
- Uses file streams to read the input file and write the encrypted file.
- input.pipe(cipher).pipe(output) connects the file read stream, the cipher and the file write stream.
- It uses a finish event on the output stream to ensure that the file has been completely written before appending the salt and IV to the end of the encrypted file.

## Código
- "crypto" y "fs" son módulos de Node.js. 
- "crypto" proporciona funciones criptográficas y "fs" permite interactuar con el sistema de archivos. 
- "salt" es una secuencia aleatoria que se usa para proteger contra ataques de diccionario.
- "iterations" es el número de iteraciones que se usarán en el proceso de derivación de clave.
- "deriveKey" toma una contraseña, una sal y un número de iteraciones, y usa el algoritmo PBKDF2 con SHA-256 para derivar una clave de 256 bits.

## Encriptar:
- Genera un vector de inicialización (IV) aleatorio de 16 bytes.
- Crea un cifrador utilizando AES-256-CBC con la clave derivada y el IV.
- Usa streams de archivos para leer el archivo de entrada y escribir el archivo cifrado.
- input.pipe(cipher).pipe(output) conecta el flujo de lectura del archivo, el cifrador y el flujo de escritura del archivo.
- Usa un evento finish en el flujo de salida para asegurarse de que el archivo se ha escrito completamente antes de añadir la sal y el IV al final del archivo cifrado.

## Video / Video

## Requirements / Requisitos
#### 🛠 [Visual Studio Code](https://code.visualstudio.com/) 
#### 🛠 [Node](https://nodejs.org/) 
#### 🛠 [crypto](https://nodejs.org/api/crypto.html#crypto)
#### 🛠 [fs](https://nodejs.org/api/fs.html)

-----
