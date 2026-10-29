const generatedPassword = document.getElementById("generated-password")
const copyPassword = document.getElementById("copy")
const text = document.getElementById("text")
const lengthValue = document.getElementById("length")
const lengthRange = document.getElementById("length-range")
const generateButton = document.getElementById("generate")

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?";

const generatePassword = () => {
    let password = ""
    const random = new Uint32Array(1)

    const limit = Math.floor(2 ** 32 / characters.length) * characters.length

    for (let i = 0; i < Number(lengthRange.value); i++){

        do {
            crypto.getRandomValues(random)
        } while (random[0] > limit);
        password += characters[random[0] % characters.length]
    }
    generatedPassword.textContent = password
}

const generatePasswordRange = () => {
    lengthValue.textContent = lengthRange.value
    generatePassword()
}

const copyPasswordFunction = () => {
    navigator.clipboard.writeText(generatedPassword.textContent)

    text.textContent = "Password copied to clipboard."
    copyPassword.textContent = "Copied!"

    setTimeout(() => {
        text.textContent = "Uses letters, numbers, and symbols."
        copyPassword.textContent = "Copy"
    }, 2000);
}

generateButton.addEventListener("click", generatePassword)
lengthRange.addEventListener("input", generatePasswordRange)
copyPassword.addEventListener("click", copyPasswordFunction)

generatePassword()