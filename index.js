const inquirer = require('inquirer');
let prompt = inquirer.createPromptModule();
const {Pokemon} = require('./pokemon.js');
const {Battle} = require('./battle.js');
const Trainer = require('./trainer.js');
const Player = require('player');

let pokeTrainer1, pokeTrainer2, heroPokemon, villainPokemon;


function pokeEncounter() {
   
var player = require('play-sound')(opts = {})
player.play('../media/pokemon.mp3', function(err){
 if (err) throw err
})

    //Pokemon Intro Banner...
        console.log('\n');
    let output = '      T H E   P O K E M O N   B A T T L E R';
        output += ' \n';
        output += '  ___   ___   _  _   ____   _    _   ___   _   _       \n';
        output += ' | _ | | _ | | |/ / | ___| | \\  / | | _ | | \\\ | |   \n';
        output += ' | __| ||_|| | | \\  | |-_  |  \\/  | ||_|| |  \\\| |  \n';
        output += ' |_|   |___| |_|\\_\\ |____| |_|  |_| |___| |_|\\__|   \n';
        output += ' \n';

       // setTimeout(function(){ console.log("READY, GET SET, GO!...."); }, 8000);        
        console.log(output);
        console.log('\x1b[31m%s\x1b[30m','   A Jon Northcoder Entertainment Company c2018\n');
        console.log('\x1b[33m%s\x1b[0m','      The Battle of the Great Pokemon Begins!');
        console.log('\n');

        pokeTrainer1 = new Trainer('ash');
        pokeTrainer2 = new Trainer('tray');
        
        encounter1();
        
  }

  //First trainer choice...
  function encounter1() {
    inquirer.prompt({
        type: 'list',
        name: 'heroPokemon',
        message: 'Pick your Pokemon...\n',
        choices: [
        'Bulbasaur', 'Ivysaur', 'Venusaur', 'Oddish', 'Squirtle', 'Wartortle',
        'Blastoise', 'Psyduck', 'Charmander', 'Charmeleon', 'Charizard', 'Vulpix'
        ]
    })
    .then((answer) => {
        console.log('\x1b[32m%s\x1b[0m','You have picked ' + answer.heroPokemon);

        pokeTrainer1.catch(answer.heroPokemon);

        encounter2();
    }); 
    
}   //Second trainer choice...
    function encounter2() {
        console.log('\n');
        inquirer.prompt({
            type: 'list',
            name: 'villainPokemon',
            message: 'Pick your Enemy Pokemon...\n',
            choices: [
                'Bulbasaur', 'Ivysaur', 'Venusaur', 'Oddish', 'Squirtle', 'Wartortle',
                'Blastoise', 'Psyduck', 'Charmander', 'Charmeleon', 'Charizard', 'Vulpix'
                ]
        })
        .then((answer) => {
            console.log('\x1b[32m%s\x1b[0m','You have picked ' + answer.villainPokemon + '\n');
            pokeTrainer2.catch(answer.villainPokemon);

            // if (pokeTrainer2 === pokeTrainer1) {
            //     console.log("A Pokemon cannot fight itself!!! Pick another enemy!")
            //     encounter2 ();
            // }

            console.log('\x1b[35m%s\x1b[0m','THE ARENA IS NOW READY FOR THE GRAND FIGHT OF THE GREAT POKEMONS!!!\n');

            heroPokemon = pokeTrainer1.pokeBall[0];
            villainPokemon = pokeTrainer2.pokeBall[0];
            let battleField = new Battle(heroPokemon, villainPokemon);

            battleField.getfight();

        }); 
    }
      
  pokeEncounter();



  module.exports = {pokeEncounter, encounter1, encounter2}