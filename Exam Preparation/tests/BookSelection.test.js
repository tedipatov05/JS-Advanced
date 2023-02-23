let {bookSelection} = require('../03. Book Selection');

let {assert, expect} = require('chai');

describe('Test BookSelection', function(){
    describe('isGenreSuitable', function(){
        it('isGenreSuitable should return correct result with incorrect age', function(){

            assert.equal(bookSelection.isGenreSuitable("Thriller", 12), `Books with Thriller genre are not suitable for kids at 12 age`);
        });
        it('isGenreSuitable should return correct result with correct age', function(){

            assert.equal(bookSelection.isGenreSuitable("Thriller", 20), `Those books are suitable`);
        });

        
    });
    describe('isItAffordable', function() {
        it('isItAffordable should throw error with invalid input', function(){
            assert.throws(() => {bookSelection.isItAffordable('12', '4')}, Error,"Invalid input");
        })
        it('isItAffordable should throw error with invalid price', function(){
            assert.throws(() => {bookSelection.isItAffordable(12, '4')}, Error,"Invalid input");
        })
        it('isItAffordable should throw error with invalid budget', function(){
            assert.throws(() => {bookSelection.isItAffordable([4], [4])}, Error,"Invalid input");
        })
        it('isItAffordable should return correct result with bigger price than budget', function(){
            assert.equal(bookSelection.isItAffordable(20, 10), "You don't have enough money");
        })
        it('isItAffordable should return correct result with equal price and budget', function(){
            assert.equal(bookSelection.isItAffordable(20, 20), `Book bought. You have 0$ left`);
        })
        it('isItAffordable should return correct result with lower price than budget', function(){
            assert.equal(bookSelection.isItAffordable(20, 30), `Book bought. You have 10$ left`);
        })
        

        
    })
    describe("suitableTitles", function(){
        it('suitableTitles should throw an Error with incorrect genre', () =>{
            assert.throws(() => {bookSelection.suitableTitles([], 12)}, Error, "Invalid input");

        });
        it('suitableTitles should throw an Error with incorrect array', () =>{
            assert.throws(() => {bookSelection.suitableTitles(12032, 'Horror')}, Error, "Invalid input");

        });
        it("Check for valid parameters", () => {
            assert.equal(
              bookSelection.suitableTitles(
                [
                  { title: "The Da Vinci Code", genre: "Crime" },
                  { title: "Presumed Innocent", genre: "Crime" },
                ],
                "Crime"
              )
            ).to.deep.equal(["The Da Vinci Code", "Presumed Innocent"]);
            expect(
              bookSelection.suitableTitles(
                [{ title: "The Guest List", genre: "Thriller" }],
                "Thriller"
              )
            ).to.deep.equal(["The Guest List"]);
            expect(
              bookSelection.suitableTitles(
                [{ title: "The Da Vinci Code", genre: "Crime" }],
                "none"
              )
            ).to.deep.equal([]);
          });

    })

})