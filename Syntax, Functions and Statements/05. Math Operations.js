function operation(num1, num2, operator){
    let result;
    switch(operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1-num2;
            break;
        case "*":
            result = num1*num2;
            break;
        case "/":
            result = num1/num2;
            break;
        case "%":
            result = num1%num2;
            break;
        case "**":
            result = num1**num2;
            break;
        default:
            console.log("worng operator");
            break;

    }

    console.log(result);
}

operation(3, 5.5, '*')