function generateString() {
    let userString = document.getElementById("userString").value;
    let resultElement = document.getElementById("result");

    // Validate that the entry is not empty
    if (userString.trim() === "") {
        alert("Please enter a non-empty string.");
        return;
    }

    let result = repeatingString(userString, 5);
    resultElement.textContent = result;
}

function repeatingString(str, n) {
    if (n === 0) {
        return "";
    }

    return str + " " + repeatingString(str, n - 1);
}
