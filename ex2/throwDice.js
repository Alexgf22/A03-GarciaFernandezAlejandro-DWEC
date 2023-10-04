function throwDice() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1
    let randomNumber2 = Math.floor(Math.random() * 6) + 1

    let dice1 = randomNumber1
    let dice2 = randomNumber2

    let sum = dice1 + dice2
    return sum
}
console.log("dsf")
let result = throwDice()
document.getElementById("result").innerHTML = result