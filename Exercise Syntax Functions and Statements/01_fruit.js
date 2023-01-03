
function calculatePrice(type, weight, price){

    let weightInKg = weight/1000;
    console.log(`I need $${(price*weightInKg).toFixed(2)} to buy ${(weightInKg).toFixed(2)} kilograms ${type}.`)

}

