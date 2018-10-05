const {Pokemon} = require('./pokemon');
const pokemonData = require('./pokemonData');


class Trainer {

    constructor (name) {
        this.name = name;
        this.pokeBall = {};
        
    }
    catch (name) {        
        const i = pokemonData.map((x) => {return x[0]}
        ).indexOf(name);
        const wildPokemon = new Pokemon(...pokemonData[i]);
        this.pokeBall[0] = wildPokemon;
    }
}



module.exports = Trainer;