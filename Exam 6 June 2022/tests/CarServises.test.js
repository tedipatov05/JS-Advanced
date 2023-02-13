let {carService} = require("../03. Car Servises");

let {assert} = require('chai');

describe("Car Servises", function(){
    describe("isItExpensive", function(){
        it('isItExpensive should return correct result with issue diff from Engine or Transmission', () =>{

            assert.equal(carService.isItExpensive('nothing'), 'The overall price will be a bit cheaper');
        });
        it('isItExpensive should return correct result with issue Engine', () => {
            assert.equal(carService.isItExpensive('Engine'),`The issue with the car is more severe and it will cost more money` );
        });

        it('isItExpensive should return correct result with issue Transmission', () => {
            assert.equal(carService.isItExpensive('Transmission'),`The issue with the car is more severe and it will cost more money` );
        });
        

    });
    describe("discount", () =>{
        it("discount should throw error with invalid numberOfParts", () =>{
            assert.throws(() => {carService.discount('12', 13)}, Error, 'Invalid input');
        });
        it('discount should throw Error with invalid totalPrice', () =>{
            assert.throws(() => {carService.discount(5, '24')}, Error, 'Invalid input');
        });
        it('discount should throw Error with invalid params', () =>{
            assert.throws(() => {carService.discount('5', '24')}, Error, 'Invalid input');
        });
        it('discount should return correct result with numberOfParts lower or equal than 2', () => {
            assert.equal(carService.discount(2, 10), 'You cannot apply a discount');

        });
        it('discount should calculate correct price with discount when number of parts are between 2 and 7', () => {
            assert.equal(carService.discount(7, 100), 'Discount applied! You saved 15$')
        });
        it('discount should calculate correct price with discount when number of parts are between 2 and 7', () => {
            assert.equal(carService.discount(4, 100), 'Discount applied! You saved 15$')
        });
        it('discount should calculate correct price with discount when number of parts are higher than 7', () => {
            assert.equal(carService.discount(8, 100), 'Discount applied! You saved 30$')
        });



    });
    describe('partsToBuy', () =>{
        it('partsToBuy should throw error with incorrect partsCatalog', () => {
            assert.throws(() => {carService.partsToBuy('wf',["blowoff valve", "injectors"])}, 'Invalid input');
        })
        it('partsToBuy should throw error with incorrect neededParts', () => {
            assert.throws(() => {carService.partsToBuy(([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],"blowoff valve", "injectors"))}, 'Invalid input');
        });
        it("partsToBuy should return the correct price for parts", () =>{
            let partsCatalog = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
            let neededParts = ['blowoff valve', 'injector'];

            assert.equal(carService.partsToBuy(partsCatalog, neededParts), 145)
        })
        it("partsToBuy should return the correct price for parts", () =>{
            let partsCatalog = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, {part: "injector", price: 100}];
            let neededParts = ['blowoff valve', 'injector'];

            assert.equal(carService.partsToBuy(partsCatalog, neededParts), 245)
        })
    })
});