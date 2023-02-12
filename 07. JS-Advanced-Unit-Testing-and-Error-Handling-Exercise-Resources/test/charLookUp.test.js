let {assert} = require("chai");
let {lookupChar} = require("../03.CharLookUp");

describe("test CharLookUp functionality", () =>{
    describe("test CharLookUp with incorrect data", () =>{
        it("result should return undefined with first param is not string", () =>{
            assert.equal(lookupChar(5, 5), undefined);
        });
        it("result should return undefined with second param is not number", () =>{
            assert.equal(lookupChar("alive", "gosho"), undefined);
        });
        it("result should return undefined when bith parameter are incorrect", () =>{
            assert.equal(lookupChar(12, -5), undefined);
        });
        it("result should return undefined with second param is decimal", () =>{
            assert.equal(lookupChar("pesho", 2.3), undefined);
        });
        it("result should return undefined with first param is not string", () =>{
            assert.equal(lookupChar(["gosho", "pesho"], 0), undefined);
        });


    });
    describe("test CharLookUp with correct string, but incorrect index", () =>{
        it("result should return 'Incorrect index' when index is negative number", () =>{
            assert.equal(lookupChar("ivon", -2), 'Incorrect index');

        });
        it("result should return 'Incorrect index' when index is bigger than string length", () =>{
            assert.equal(lookupChar("ivon", 12), 'Incorrect index');

        });
        it("result should return 'Incorrect index' when index is equal to string length", () =>{
            assert.equal(lookupChar("ivon", 4), 'Incorrect index');

        });
    });
    describe("test CharLookUp with correct data", () =>{
        it("result should return 'n' char at index 3 when string is 'Ivon'", () =>{
            assert.equal(lookupChar('Ivon', 3), 'n');

        });
        it("result should return 'e' char at index 3 when string is 'love'", () =>{
            assert.equal(lookupChar('love', 3), 'e');

        });


        
    })
});