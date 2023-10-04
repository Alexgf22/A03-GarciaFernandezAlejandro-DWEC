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

let inputMatrix = [[5, 4, 6], [2, 9, 3], [8, 1, 7]];

let flattenedArray = flattenMatrix(inputMatrix);
let sortedArray = sortArrayAsc(flattenedArray);

document.getElementById("sorted-array").innerHTML = `
    <h2>Sorted Array</h2>
    <pre>[${sortedArray.join(', ')}]</pre>
`;
