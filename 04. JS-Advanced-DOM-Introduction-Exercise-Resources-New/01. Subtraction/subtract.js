function subtract() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    let subtraction = Number(firstNumber) - Number(secondNumber);

    let result = document.getElementById("result");
    result.textContent = subtraction;
}