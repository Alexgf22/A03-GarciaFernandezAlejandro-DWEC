let alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

class CaesarCipher {
    constructor(positionNumber) {
        this.positionNumber = positionNumber;
    }

    encode(userText) {
        userText = userText.toUpperCase();
        let numberPositions = this.positionNumber;
        let encodedWord = "";
        for (let i = 0; i < userText.length; i++) {
            if (userText[i] === " ") {
                encodedWord += " ";
            } else {
                let currentLetterIndex = alphabet.indexOf(userText[i]);
                let newLetter =  alphabet[currentLetterIndex + numberPositions];
                encodedWord += newLetter;
            }
        }
        return encodedWord;
    }

    decode(text_encoded) {
        // Continue
    }
}

function encode() {
    let userText = document.getElementById("inputText").value;
    let cipher = new CaesarCipher(5);
    let text_encoded = cipher.encode(userText);
    document.getElementById("result").textContent = text_encoded;
}


let cipher = new CaesarCipher(5);
let text_decoded = cipher.decode(text_encoded);
