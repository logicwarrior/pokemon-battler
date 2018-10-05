const {expect} = require('chai');
const {Trainer} = require('../trainer');
const {Pokemon} = require('../pokemon');
const {pokemonData} = require('../pokemonData');

describe.only('Trainer',() => {
    it('new Trainer instance has name and pokeBall property',() => {
        const myTrainer = new Trainer();
        expect(myTrainer).to.haveOwnProperty('name')
        expect(myTrainer).to.haveOwnProperty('pokeBall')
    });
    it('catch method should add something to the pokeBall object',() => {
        const myTrainer = new Trainer();
        myTrainer.catch();
        expect(myTrainer.pokeBall).to.not.be.empty;
    });
    it('catch method should add pokemon to the pokeBall object',() => {
        const myTrainer = new Trainer();
        myTrainer.catch();
        console.log(myTrainer.pokeBall);
        expect(myTrainer.pokeBall[0]).to.be.instanceOf(Pokemon);
    });
    it('check the contents of the pokeBall object',() => {
        const myTrainer = new Trainer();
        myTrainer.catch();
        expect(myTrainer.pokeBall[pokemonData[0]]).to.be.instanceOf(Pokemon);
    });
});