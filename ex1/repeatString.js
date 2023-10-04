function repeatingString(n) {
    if (n === 0) {
        return ""
    }
    
    return "bauuuba " + repeatingString(n - 1)
}

let result = repeatingString(5)
document.getElementById("result").innerHTML = result