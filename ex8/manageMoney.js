class Wallet {
    constructor(name, fiveEuroBills, tenEuroBills, twentyEuroBills) {
        this._name = name;
        this._fiveEuroBills = fiveEuroBills;
        this._tenEuroBills = tenEuroBills;
        this._twentyEuroBills = twentyEuroBills;
    }
    // Name
    get name() {
        return this._name;
    }
    
    set name(newName) {
        this._name = newName;
    }
    // 5 euro bills
    get fiveEuroBills() {
        return this._fiveEuroBills;
    }
    
    set fiveEuroBills(newCount) {
        this._fiveEuroBills = newCount;
    }
    // 10 euro bills
    get tenEuroBills() {
        return this._tenEuroBills;
    }
    
    set tenEuroBills(newCount) {
        this._tenEuroBills = newCount;
    }
    // 20 euro bills
    get twentyEuroBills() {
        return this._twentyEuroBills;
    }
    
    set twentyEuroBills(newCount) {
        this._twentyEuroBills = newCount;
    }

    totalMoney() {
        return (this._fiveEuroBills * 5) + (this._tenEuroBills * 10) + (this._twentyEuroBills * 20);
    }

    displayContents() {
        return `Contents of ${this._name}:
            5 Euro bills: ${this._fiveEuroBills}
            10 Euro bills: ${this._tenEuroBills}
            20 Euro bills: ${this._twentyEuroBills}
            Total money: ${this.totalMoney()} euros`;
    }
}

function mostMoney(wallets) {
    let maxMoney = 0;
    let maxWallet = null;

    for (let wallet of wallets) {
        let money = wallet.totalMoney();
        if (money > maxMoney) {
            maxMoney = money;
            maxWallet = wallet;
        }
    }

    return maxWallet ? maxWallet.name : "Any of them";
}

let m1 = new Wallet("Wallet 1", 0, 0, 2);
let m2 = new Wallet("Wallet 2", 0, 4, 0);
let m3 = new Wallet("Wallet 3", 8, 1, 0);
let m4 = new Wallet("Wallet 4", 2, 0, 1);
let m5 = new Wallet("Wallet 5", 0, 2, 1);
let m6 = new Wallet("Wallet 6", 2, 2, 0);
let m7 = new Wallet("Wallet 7", 0, 3, 0);

let wallets = [m1, m2, m3, m4, m5, m6, m7];

let result = mostMoney(wallets);

let outputElement = document.getElementById('output');
outputElement.innerHTML = `The wallet with the most money is: ${result}`;

let walletContentsElement = document.getElementById('walletContents');
for (let wallet of wallets) {
    walletContentsElement.innerHTML += `<p>${wallet.displayContents()}</p>`;
}



