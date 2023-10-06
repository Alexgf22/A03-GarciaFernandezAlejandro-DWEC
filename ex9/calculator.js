function calculateExpression() {
    let expression = document.getElementById("expression").value;
    let resultElement = document.getElementById("result");

    try {
        let result = eval(expression);
        resultElement.textContent = `The result is: ${result}`;
    } catch (error) {
        resultElement.textContent = "An error occurred while processing the expression. Please ensure it is correctly formatted.";
    }
}
