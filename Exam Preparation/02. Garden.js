class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired){
        if(spaceRequired > this.spaceAvailable){
            throw Error("Not enough space in the garden.");
        }

        let currPlant = {
            plantName, spaceRequired, 
            ripe: false,
            quantity: 0
        }
        this.plants.push(currPlant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }
    ripenPlant(plantName, quantity){
        let currPlant = this.plants.find(p => p.plantName === plantName);

        if(!currPlant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if(currPlant.ripe){
            throw new Error(`The ${plantName} is already ripe.`);

        }

        if(quantity <= 0){
            throw new Error("The quantity cannot be zero or negative.");
        }

        currPlant.ripe = true;
        currPlant.quantity += quantity;

        if(quantity === 1){
            return `${quantity} ${plantName} has successfully ripened.`

        }else{
            return `${quantity} ${plantName}s have successfully ripened.`
        }
       
    }
    harvestPlant(plantName){
        let currPlant = this.plants.find(p => p.plantName === plantName);

        if(!currPlant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if(!currPlant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.plants = this.plants.filter(p => p.plantName !== plantName);
        this.spaceAvailable += currPlant.spaceRequired;

        let plantToAdd = {
            plantName: currPlant.plantName,
            quantity: currPlant.quantity
        }
        this.storage.push(plantToAdd);

        return `The ${plantName} has been successfully harvested.`;
    }
    generateReport(){
        let outPut = `The garden has ${ this.spaceAvailable } free space left.\n`;
        let plantsNames = [];
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).forEach(p => plantsNames.push(p.plantName));

        outPut += `Plants in the garden: ${plantsNames.join(', ')}\n`;

        if(this.storage.length === 0 ){
            outPut += `Plants in storage: The storage is empty.`;
        }else{
            outPut += "Plants in storage: "
            for (const {plantName, quantity} of this.storage) {
                outPut += `${plantName} (${quantity}), `;

                
            }
        }
        outPut = outPut.substring(0, outPut.length - 2);

        return outPut;
    }
}
try {
    const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

} catch (ex) {
    console.log(ex.message);
}
