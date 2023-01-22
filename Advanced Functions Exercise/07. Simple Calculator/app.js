function calculator() {
    let sl1;
    let sl2;
    let resSel;
    return {
        init: (selector1, selector2, resultSelector) =>{
            sl1 = document.querySelector(selector1);
            sl2 = document.querySelector(selector2);
            resSel = document.querySelector(resultSelector);

        },
        add: () =>{

            let firstNum = Number(sl1.value);
            let secondNum = Number(sl2.value);
            let resNum = firstNum + secondNum;
            resSel.value = resNum;
            
        },
        subtract: () =>{
            let firstNum = Number(sl1.value);
            let secondNum = Number(sl2.value);
            let subtr = firstNum - secondNum;
            resSel.value = subtr; 
            


        }

    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 






