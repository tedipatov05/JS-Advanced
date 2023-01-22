function solution(){
    let store = {
        protein: 0, 
        carbohydrate: 0,
        fat: 0, 
        flavour: 0
    }
    let recipesEnum = {
        apple: {carbohydrate:1, flavour:2},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        lemonade: {carbohydrate: 10, flavour:20 },
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    return function inputHandler(input){
        let actionHandler = cmdOption();

        let [cmd, microElement, quantity] = input.split(' ');
        return actionHandler[cmd](microElement, quantity);


        
    }

    function cmdOption(){
        return {
            restock: (microElement, quantity) => {
                store[microElement] = store[microElement] + Number(quantity) 
                return "Success";
            },
            prepare: (recipe, quantity) => {
                let isDone = true;
                let str = '';
                let copyStore = Object.assign({}, store);

                for(let [key,defQuantity] of Object.entries(recipesEnum[recipe])){
                    let needValue = Number(quantity) * defQuantity;
                    if(store[key] < needValue){
                        isDone = false;
                        str = `Error: not enough ${key} in stock`;
                        break;
                    }
                    copyStore[key] -= needValue;
                }
                if(!isDone){
                    return str;
                }
                store = copyStore;
                return "Success";

            },
            report: () => {
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
            }

        }
    }
}


let manager = solution (); 
console.log (manager ("restock carbohydrate 10")); // Success 
console.log (manager ("restock flavour 10")); // Error: not enough carbohydrate in stock 
console.log (manager ('prepare apple 1'));
console.log (manager ('restock fat 10'));
console.log (manager ('prepare burger 1'));
console.log (manager ('report'));
