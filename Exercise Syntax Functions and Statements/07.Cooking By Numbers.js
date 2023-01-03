function cookingByNumbers(inputNum, ...comands){

    comands.forEach(x => {
        inputNum = manipulator(inputNum, x)
    });





    function manipulator(num, cmd){
        switch (cmd){
            case "chop":
                num/=2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break; 
            case "spice":
                num +=1;
                console.log(num);
                break;
            case "bake":
                num *=3;
                console.log(num);
                break;
            case "fillet":
                num -= num* 0.2;
                console.log(num);
                break;   
        }
        return num;

    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
