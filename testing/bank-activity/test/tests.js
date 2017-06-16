//Write your tests here! Remember, you'll need a describe block, nested 'it' statements, and your assertions/expectations library will have to be required.
const bank = require('../helpers/bank');
let {showAccounts,withdraw,deposit,transferFunds} = bank;

const {expect} = require("chai");

describe("a user should be able to", ()=>{
    beforeEach(()=>{
        bank.savings = 10;
        bank.checking = 10;
    });

    it("withdraw", ()=>{
        withdraw(5);
        expect(bank.checking).to.be.equal(5);
    });

    it("deposit to checking", ()=>{
        deposit(5, "checking");
        expect(bank.checking).to.be.equal(15);
    });

    it("deposit to savings", ()=>{
        deposit(5, "savings");
        expect(bank.savings).to.be.equal(15);
    });

    it("overdraft", ()=>{
        try {
            withdraw(15);
        } catch(err) {
            expect(err).to.be.an.instanceof(Error);
        }
    });

    it("not deposit to an invalid account", ()=>{
        try {
            deposit(5, "rainy day")
        } catch(err){
            expect(err).to.be.instanceOf(Error);
        }
    });

    it("see accounts", ()=>{
        // showAccounts();
    });

});