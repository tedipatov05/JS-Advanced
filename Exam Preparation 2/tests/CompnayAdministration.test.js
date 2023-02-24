let {companyAdministration} = require('../03. Company Administration');
let {assert} = require('chai');


describe("CompanyAdministration", () => {
    describe('hiringEmployee', () =>{
        it('hiringEmoloyee should throw an Error woth position !== Programmer', () =>{

            assert.throws( () => {companyAdministration.hiringEmployee('Teodor', 'Worker', 10)}, Error, `We are not looking for workers for this position.`);
        })
        it('hiringEmployee should return correct result with correct position and experience >= 3', () => {
            let name = "Teodor";
            let position = 'Programmer';
            let experience = 4;
            assert.equal(companyAdministration.hiringEmployee(name, position, experience), `${name} was successfully hired for the position ${position}.`);
        })
        it('hiringEmployee should return correct result with correct position and experience == 3', () => {
            let name = "Teodor";
            let position = 'Programmer';
            let experience = 3;
            assert.equal(companyAdministration.hiringEmployee(name, position, experience), `${name} was successfully hired for the position ${position}.`);
        })
        it('hiringEmployee should return correct result with correct position and experience < 3', () => {
            let name = "Teodor";
            let position = 'Programmer';
            let experience = 2;
            assert.equal(companyAdministration.hiringEmployee(name, position, experience), `${name} is not approved for this position.`);
        })
    });
    describe('calculateSalary', () => {
        it('claculateSalary should throw error with incorrect typeOf param hours', () => {
            assert.throws(() => {companyAdministration.calculateSalary('12')}, Error, "Invalid hours");
        });
        it('claculateSalary should throw error with hours lower than zero', () => {
            assert.throws(() => {companyAdministration.calculateSalary(-2)}, Error, "Invalid hours");
        });
        it('claculateSalary should return correct result with hours == 0', () => {
            assert.equal(companyAdministration.calculateSalary(0), 0);
        });
        it('claculateSalary should return correct result with hours < 160', () => {
            assert.equal(companyAdministration.calculateSalary(10), 150);
        });
        it('claculateSalary should return correct result with hours = 160', () => {
            assert.equal(companyAdministration.calculateSalary(160), 160*15);
        });
        it('claculateSalary should return correct result with hours > 160', () => {
            assert.equal(companyAdministration.calculateSalary(161), (161*15) + 1000);
        });

    })
    describe('firedEmployee', () => {
        it('firedEmployee should throw Error with incorrect param index', () =>{
            
            assert.throws(() => {companyAdministration.firedEmployee(['Ivan', "Petko"], '12')}, Error, "Invalid input");
        });
        it('firedEmployee should throw error with index lower than zero', () => {
            assert.throws(() => {companyAdministration.firedEmployee(['Ivan', "Petko"], -1)}, Error, "Invalid input");

        })
        it('firedEmployee should throw error with index bigger than arr.length', () =>{
            assert.throws(() => {companyAdministration.firedEmployee(['Ivan', "Petko"], 3)}, Error, "Invalid input");

        })
        it('firedEmployee should throw error with index equal to arr.length', () =>{
            assert.throws(() => {companyAdministration.firedEmployee(['Ivan', "Petko"], 2)}, Error, "Invalid input");

        })
        it('firedEmployee should throw error with index equal to arr.length', () =>{
            assert.throws(() => {companyAdministration.firedEmployee(['Ivan', "Petko"], 2.1)}, Error, "Invalid input");

        })
        it('firedEmployee should throw error with employees not array', () =>{
            assert.throws(() => {companyAdministration.firedEmployee("Ivan , Petko", 3)}, Error, "Invalid input");

        })
        it('firedEmployee should throw error with both params incorrect', () =>{
            assert.throws(() => {companyAdministration.firedEmployee(4, '3')}, Error, "Invalid input");

        })
        it('firedEmployee should return correct result with correct parameters', () =>{
            assert.equal(companyAdministration.firedEmployee(['Ivan', "Petko", 'Dragan'], 2), "Ivan, Petko");

        })
        it('firedEmployee should return correct result with correct params', () =>{
            assert.equal(companyAdministration.firedEmployee(['Ivan', "Petko", 'Dragan'], 1), "Ivan, Dragan");

        })
        it('firedEmployee should return correct result with correct params', () =>{
            assert.equal(companyAdministration.firedEmployee(['Ivan', "Petko", 'Dragan'], 0), "Petko, Dragan");

        })
       

    })

})