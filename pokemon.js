
class Pokemon {
   constructor (name, type, power, health, damage, sound, talk) {
    this.name = name;
    this.type = type;
    this.power = power;
    this.health = health;
    this.damage = damage;
    this.sound = sound;
    this.talk = talk;
}

    getSound () {
        var player = require('play-sound')(opts = {})
        player.play(`${this.sound}`, function(err){
         if (err) throw err
        });
    }

    getMove () {
        console.log(`${this.name} : By the power of my ${this.power}!`)
    }

    getTalk () {
        console.log(`${this.name} : ${this.talk}`)
    }
}



    module.exports = {Pokemon};