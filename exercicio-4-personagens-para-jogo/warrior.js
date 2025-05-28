const Character = require("./character");

class Warrior extends Character {
    constructor (name, lifePts, attackPts, defensePts, shieldPts){
        super(name, lifePts, attackPts, defensePts)
        this.shieldPts = shieldPts
        this.stance = 'Attacking'
    }

    attack(targetCharacter){
        if (this.stance === 'Attacking'){
            super.attack(targetCharacter)
        }
    }

    switchStance(){
        if (this.stance === 'Attacking') {
            this.stance = 'Defending'
            this.defensePts += this.shieldPts
        } else {
            this.stance = 'Attacking'
            this.defensePts -= this.shieldPts
        }
    }
}

module.exports = Warrior