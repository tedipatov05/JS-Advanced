class CarDealership{
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage){
        if(model === '' || horsepower < 0 || price < 0
        || mileage < 0){
            throw new Error('Invalid input!');
        }

        this.availableCars.push({model, horsepower, price, mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        
    }
    sellCar(model, desiredMileage){

        let currCar = this.availableCars.find(c => c.model == model);

        if(!currCar){
            throw new Error(`${model} was not found!`)
        }
        let soldPrice = currCar.price;

        if(currCar.mileage <= desiredMileage){
            soldPrice = soldPrice;

        }else if(currCar.mileage - desiredMileage <= 40000){
            soldPrice -= soldPrice * 0.05; 
        }else if(currCar.mileage - desiredMileage > 40000){
            soldPrice -= soldPrice * 0.10;
        }
        let horsepower = currCar.horsepower;

        this.availableCars = this.availableCars.filter(c => c.model !== model);
        this.soldCars.push({model, horsepower, soldPrice});
        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`; 

    }
    currentCar(){

        let buff = '';

        if(this.availableCars.length > 0){
            buff += "-Available cars:\n"
            for (const car of this.availableCars) {
                buff += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`;
                
            }

        } else{
            buff += "There are no available cars";
        }

        return buff.trimEnd();
    }
    salesReport(criteria) {
        if(criteria === 'model'){
            this.soldCars.sort((a,b) => a.model.localeCompare(b.model));

        }else if(criteria === 'horsepower'){
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }else{
            throw new Error("Invalid criteria!");
        }


        let buff = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        buff += `-${this.soldCars.length} cars sold:\n`;
        for (const car of this.soldCars) {
            buff += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$\n`;
            
        }

        return buff.trimEnd();

    }
}
try{
    let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

}catch(ex){
    console.log(ex.message);
}