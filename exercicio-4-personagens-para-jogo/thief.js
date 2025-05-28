const Character = require("./character")

class Thief extends Character {
    attack(targetCharacter){
        targetCharacter.lifePts -= (this.attackPts - targetCharacter.defensePts) * 2
    }
}

module.exports = Thief