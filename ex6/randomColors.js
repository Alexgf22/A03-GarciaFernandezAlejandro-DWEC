const Ghost = {
    colors: ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'yellow', 'black', 'white', 'gray'],
    darkColors: ['blue', 'purple', 'green', 'gray', 'black'],
    usedIndexes: [],
    getRandomColor: function() {
        if (this.usedIndexes.length === this.colors.length) {
            this.usedIndexes = [];
        }
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * this.colors.length);
        } while (this.usedIndexes.includes(randomIndex));
        this.usedIndexes.push(randomIndex);
        return this.colors[randomIndex];
    }
};

const colorListElement = document.getElementById("colorList");

for (let i = 0; i < 1000; i++) {
    const randomColor = Ghost.getRandomColor();
    const colorBox = document.createElement("div");
    colorBox.className = "colorBox";
    colorBox.style.backgroundColor = randomColor;

    if (Ghost.darkColors.includes(randomColor)) {
        colorBox.classList.add('darkText');
    }

    colorBox.textContent = randomColor;

    colorListElement.appendChild(colorBox);
}
