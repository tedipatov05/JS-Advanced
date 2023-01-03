function greatestDivisor(num1, num2){
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    while(num2){
        let t = num2;
        num2 = num1 % t;
        num1 = t;
    }
    console.log(num1)

}
