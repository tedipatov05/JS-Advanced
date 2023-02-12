let {assert} = require("chai");

let {isOddOrEven} = require("../02.evenOrOdd");

describe("test isOddOrEven functionality", () =>{

    describe("test isOddOrEven with incorrect value ", () => {
        it("result should be undefined with array argument", () =>{
            assert.equal(isOddOrEven(), undefined); 
            
        });
        it("result should be undefined with empty object argument", () => {
            assert.equal(isOddOrEven({}), undefined);
        });
        it("result should be undefined with object argument", () => {
            assert.equal(isOddOrEven({name: "Ivan"}), undefined);
        });
        it("result should be undefined with number argument", () => {
            assert.equal(isOddOrEven(1), undefined);
        });
        it("result should be undefined with boolean argument", () => {
            assert.equal(isOddOrEven(true), undefined);
        });
    
    
    });

    describe("test isOddOrEven with correct value", () =>{
        it("result should be even with 'Love'", () =>{
            assert.equal(isOddOrEven("Love"), 'even');
        });
        it("result should be odd with 'Todor'", () =>{
            assert.equal(isOddOrEven("Todor"), 'odd');
        })
    });
    

})


