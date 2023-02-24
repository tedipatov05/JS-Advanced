class VegetableStore{
    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.availableProducts = []; 
       
        
    }

    loadingVegetables(vegetables){
        let arr = [];

        for (let veg of vegetables) {

            let [type, quantity, price] = veg.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let product = this.availableProducts.find(p => p.type == type);

            if (product) {
                product.quantity += quantity;
                product.price = product.price < price ? price : product.price;
            } else {
                
                this.availableProducts.push({ type, quantity, price });
                arr.push(type);
            }
        }
        let buff = '';
        let set = new Set(arr);
        set.forEach(el => buff += `${el}, `);
        buff = buff.substring(0, buff.length - 2);

        return `Successfully added ${buff}`; 


    }
    buyingVegetables(selectedProducts){
        let totalPrice = 0;
        

        for (let product of selectedProducts) {
            

            let [type, quantity] = product.split(' ');
            let prod = this.availableProducts.find(p => p.type == type);
            quantity = Number(quantity);

            if(!prod){
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }else if(quantity > prod.quantity){
                
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            prod.quantity -= Number(quantity);
            
            if(prod ){
                totalPrice += prod.price * quantity;
            }

        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;


    }

    rottingVegetable(type, quantity){
        let product = this.availableProducts.find(p => p.type === type);

        if(!product){
            throw new Error( `${type} is not available in the store.`);
        } else if(quantity >= product.quantity){
            product.quantity = 0;
            
            return `The entire quantity of the ${type} has been removed.`;

        }

        product.quantity -= Number(quantity);

        return   `Some quantity of the ${type} has been removed.`;
    }

    revision(){
        let buff = "Available vegetables:\n";
        this.availableProducts = this.availableProducts.sort((a, b) => a.price - b.price);
        for (const prod of this.availableProducts){

            let {type, quantity, price} = prod;
            buff += `${type}-${quantity}-$${price}\n`;
            
        }

        buff += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    
        return buff;
    
    }

}

try{
    let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


    
}catch(ex){
    console.log(ex.message)
}
    





