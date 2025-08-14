import jwt from "jsonwebtoken";

function encryptData() {
    let message = "GLOBAL is a collage";
    console.log(message);

    let encryptMessage = jwt.sign({message}, "12345", {
        expiresIn: "1m",
    });

    console.log(encryptMessage);
}
//encryptData();

function decryptData() {
    let encryptText =
    "past the text here"
    let deryptedText = jwt.verify(encryptText, "12345");
    console.log(deryptedText);

}
decryptData();