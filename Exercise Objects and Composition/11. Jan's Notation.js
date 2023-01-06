function postfixNotation(arr) {

    let res = [];
    let number = [];
    let operators = [];

    let operationEnum  ={
        "+": (a,b) => a+b,
        "-": (a,b) => a-b,
        "*": (a,b) => a*b,
        "/": (a,b) => a/b
    }

    for(let el of arr){
        if(typeof(el) === "number"){
            number.push(el);
        }else{
            operators.push(el);
        }
    }

    if(operators.length < number.length - 1){
        console.log("Error: too many operands!");
        return;
    } else if(operators.length === number.length || number.length === 0 ){
        console.log("Error: not enough operands!");
        return;
    }

    for(let el of arr){
        if(typeof(el) === "number"){
            res.push(el);
            continue;
        }
        let numbA = res.pop();
        let numbB = res.pop();
        let result = operationEnum[el](numbB, numbA);
        res.push(result);

    }

    console.log(res.join());




}
postfixNotation(
    [3,
    4,
    '+']
);
console.log("---------------------");
postfixNotation([5,
    3,
    4,
    '*',
    '-']
);