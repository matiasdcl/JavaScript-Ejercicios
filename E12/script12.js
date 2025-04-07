function generatePassword(length)
{
    if (length < 8)
        {return console.log("La contraseña debe tener un minimo de 8 caracteres.");}

    let password = "";
    const validCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let char = "";

    for (let i = 0; i < length; i++) {
        char = validCharacters[Math.floor(Math.random() * (validCharacters.length - 0) + 0)];
        password += char;
    }

    return console.log(`contraseña: ${password}.`);
}


generatePassword(8);
generatePassword(8);
generatePassword(8);