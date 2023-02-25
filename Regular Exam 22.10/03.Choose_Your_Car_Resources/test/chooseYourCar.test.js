let {chooseYourCar} = require('../chooseYourCar');

let {assert} = require('chai');
const { describe } = require('mocha');

describe('choodeYourCar', () => {
    describe('chooseing type', () => {
        it('choosing type should throw an Error with year below 1900', () =>{
            assert.throws(() => {chooseYourCar.choosingType('Sedan', 'red', 1899)},Error , "Invalid Year!");
        })
        it('choosing type should throw an Error with year greater than 2022', () =>{
            assert.throws(() => {chooseYourCar.choosingType('Sedan', 'red', 2023)},Error , "Invalid Year!");
        })
        it('choosing type should throw an Error with type different form Sedan', () => {
            assert.throws(() => {chooseYourCar.choosingType('Audi', 'white', 2022)}, Error, "This type of car is not what you are looking for.");
        })
        it('choosing type should return correct result with year below 2010', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2009), "This Sedan is too old for you, especially with that red color.")
        })
        it('choosing type should return correct result with year below 2010', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2008), "This Sedan is too old for you, especially with that red color.")
        })
        it('choosing type should return correct result with year greater than 2010', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2011), `This red Sedan meets the requirements, that you have.`)
        })
        it('choosing type should return correct result with year greater equal to 2010', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2010), `This red Sedan meets the requirements, that you have.`)
        })

    })
    describe('brandName', () => {
        it('brand name should throw exception with incorrect brands', () => {
            assert.throws(() => {chooseYourCar.brandName('BMW, Audi, KIA', 2)}, Error, "Invalid Information!");
        })
        it('brand name should throw exception with incorrect type index', () => {
            assert.throws(() => {chooseYourCar.brandName(['BMW', 'Audi', 'KIA'], '2')}, Error, "Invalid Information!");
        })
        it('brand name should throw exception with index out of the bounds of array', () => {
            assert.throws(() => {chooseYourCar.brandName(['BMW', 'Audi', 'KIA'], -1)}, Error, "Invalid Information!");
        })
        it('brand name should throw exception with index out of the bounds of array', () => {
            assert.throws(() => {chooseYourCar.brandName(['BMW', 'Audi', 'KIA'], 5)}, Error, "Invalid Information!");
        })
        it('brand name should return correct result wiht correct parameters', () => {
            assert.equal(chooseYourCar.brandName(['BMW', 'Audi', 'KIA'], 0), 'Audi, KIA');
        })
    })
    describe('CarFuelConsumption', () => {
        it('CarFuelConsumption should throw an Error with incorrect distanceKm', () => {
            assert.throws(() => {chooseYourCar.carFuelConsumption('120', 300)}, Error, "Invalid Information!");
        })
        it('CarFuelConsumption should throw an Error with incorrect consumptedFuled', () => {
            assert.throws(() => {chooseYourCar.carFuelConsumption(120, '12')}, Error, "Invalid Information!");
        })
        it('CarFuelConsumption should retunr correct result', () => {
            let litersPerHundredKm =((10 / 200)* 100).toFixed(2);

            assert.equal(chooseYourCar.carFuelConsumption(200, 10), `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`);
        })
        it('CarFuelConsumption should retunr correct result', () => {
            let litersPerHundredKm =((10 / 30)* 100).toFixed(2);

            assert.equal(chooseYourCar.carFuelConsumption(30, 10),`The car burns too much fuel - ${litersPerHundredKm} liters!`);
        })
        it('CarFuelConsumption should retunr correct result', () => {
            let litersPerHundredKm =((7 / 100)* 100).toFixed(2);

            assert.equal(chooseYourCar.carFuelConsumption(100, 7), `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`);
        })
        
    })
} )