function flattenMatrix(matrix) {
    return matrix.reduce((acc, curr) => acc.concat(curr), []);
}

function sortArrayAsc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function processMatrix() {
    let input = document.getElementById("matrixInput").value;

    if (input.trim() === "") {
        alert("Please enter a non-empty matrix.");
        return;
    }

    try {
        
        let matrix = JSON.parse(input);

        if (!Array.isArray(matrix) || matrix.some(subArr => !Array.isArray(subArr))) {
            alert("Invalid input. Please enter a valid matrix in the format [[...], [...], ...].");
            return;
        }

        let flattenedArray = flattenMatrix(matrix);
        let sortedArray = sortArrayAsc(flattenedArray);

        let sortedArrayElement = document.getElementById("sorted-array");
        sortedArrayElement.innerHTML = `
            <h2>Sorted Array</h2>
            <pre>[${sortedArray.join(', ')}]</pre>
        `;
    } catch (error) {
        alert("Invalid input. Please enter a valid matrix in the format [[...], [...], ...].");
    }
}
