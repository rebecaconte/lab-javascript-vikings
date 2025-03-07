// Soldier
class Soldier  {
    constructor(health, strength) {
        this.health = health
        this.strength = strength

    }
    attack() {
        return this.strength  
    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage
    }
}

// Viking
class Viking extends Soldier {

    constructor (name, health, strength){
        super (health, strength)
        this.name = name;
    }
    
    receiveDamage(theDamage) {

        super.receiveDamage(theDamage);

        if(super.health > 0) {
           return `${this.name} has received ${theDamage} points of damage`;
        } else if (super.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
    super (health, strength)    
    }
    attack() {
        return this.strength
    }
    receiveDamage(theDamage) {
        super.receiveDamage(theDamage);

        if(super.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;
        } else if (super.health <= 0) {
            return `A Saxon has died in act of combat`;
        }
    }
}

/*
// War
class War {
    constructor (){

        vikingArmy: []
        saxonArmy: []

        addViking(viking){
            this.vikingArmy.push(viking);
        }
        addSaxon(saxon) {
            this.saxonArmy.push(saxon)  
        }
        vikingAttack() {
            (Math.random() * 10) + 1
        }
        saxonAttack() {

        }
        showStatus() {

        }

    } 
}
*/