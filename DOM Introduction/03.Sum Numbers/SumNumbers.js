function calc() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("sum");

    num1 = Number(num1);
    num2 = Number(num2);

    res.value = num1 + num2; 
}
