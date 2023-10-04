function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function simulateThrows(iterations) {
    let results = {};

    for (let i = 0; i < iterations; i++) {
        let die1 = rollDice();
        let die2 = rollDice();
        let sum = die1 + die2;

        if (results[sum]) {
            results[sum]++;
        } else {
            results[sum] = 1;
        }
    }

    return results;
}

function displayResults(results) {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    for (let sum in results) {
        let paragraph = document.createElement("p");
        paragraph.textContent = `The result ${sum} appeared ${results[sum]} times.`;
        resultDiv.appendChild(paragraph);
    }
}


let results = simulateThrows(36000);

displayResults(results);

let result = rollDice();
document.getElementById("result").innerHTML += `<p>Single roll result: ${result}</p>`;
