export default function generatePass(){
    let password: string = ''
    let passwordLength = 12
    let characters: string = 'Aa@#123456789abcdefghijFGHIJKLMNOP!'

    for (let index = 0; index < passwordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password
}