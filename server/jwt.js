import jwt from "jsonwebtoken";

function encryptData() {
    let message = "GLOBAL is a collage";
    console.log(message);

    let encryptMessage = jwt.sign({message}, "12345", {
        expiresIn: "1m",
    });

    console.log(encryptMessage);
}
encryptData();

function decryptData() {
    let encryptText =
    "paste the encryted text here"
    // example : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoi
    // R0xPQkFMIGlzIGEgY29sbGFnZSIsImlhdCI6MTc1NTE4NjgzNSwiZXhwIjoxNzU
    // 1MTg2ODk1fQ.3h_fMYMrJsYEWVdVeiYy2GeBWhd-HfTR4KItPPksAns
    let deryptedText = jwt.verify(encryptText, "12345");
    console.log(deryptedText);

}
decryptData();