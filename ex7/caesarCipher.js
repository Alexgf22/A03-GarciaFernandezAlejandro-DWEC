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
        text_encoded = text_encoded.toUpperCase();
        let numberPositions = this.positionNumber;
        let decodedWord = "";
        for (let i = 0; i < text_encoded.length; i++) {
            if (text_encoded[i] === " ") {
                decodedWord += " ";
            } else {
                let currentLetterIndex = secondIndexOf(alphabet,text_encoded[i]);
                let previousLetter =  alphabet[currentLetterIndex - numberPositions];
                decodedWord += previousLetter;
            }
        }
        return decodedWord;
    }
}

function encode() {
    let userText = document.getElementById("inputText").value;
    let cipher = new CaesarCipher(5);
    let text_encoded = cipher.encode(userText);
    document.getElementById("result").textContent = text_encoded;
}

function decode() {
    let userText = document.getElementById("inputText").value;
    let cipher = new CaesarCipher(5);
    let text_encoded = cipher.encode(userText);
    let text_decoded = cipher.decode(text_encoded);
    document.getElementById("result").textContent = text_decoded;
}


function secondIndexOf(array, element) {
    let firstOccurrence = array.indexOf(element);
    if (firstOccurrence !== -1) {
        let secondOccurrence = array.indexOf(element, firstOccurrence + 1);
        return secondOccurrence;
    }
    return -1; 
}
