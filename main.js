var opts = {
  name: "name",
  health: "2000"
};


function Character(options){
  var options = options || {};
  this.name = options.name || "A";
  this.health = options.health || 1000;
  this.weapon = new Weapon({name: "a", damage: "100"});
  this.equip = function(weapon) {
    this.weapon = weapon;
  };
  this.attack = function(enemy){
    var randomInt = Math.floor(Math.random() * 10);
   if(randomInt < 4) {
     enemy.health = enemy.health - this.weapon.damage;
     if(enemy.health <= 0) {
       enemy.health = 0;
       console.log("The Avengers will always avenge the people of Earth. Your powers have failed you, " + enemy.name);
     } else {
       console.log("The Avengers will not stop until you've been defeated, " + enemy.name + ", your life is now at " + enemy.health);
     }

 } else {
   console.log("You got away this time, " + enemy.name + ". The Avengers will not stop until you've been defeated, " + enemy.name + ", your life is now at " + enemy.health);
 }
 };

}

function Enemy(options) {
  var options = options || {};
  this.name = options.name || "A";
  this.health = options.health || 1000;
  this.weapon = new Weapon({name: "a", damage: "100"});
  this.equip = function(weapon) {
    this.weapon = weapon;
  };
  this.attack = function(enemy){
    var randomInt = Math.floor(Math.random() * 10);
   if(randomInt < 4) {
     enemy.health = enemy.health - this.weapon.damage;
     if(enemy.health <= 0) {
       enemy.health = 1;
       console.log("The Avengers will never die, " + enemy.name);
     } else {
       console.log("I will finish you, " + enemy.name + ", your life is now at " + enemy.health);
     }

 } else {
   console.log("You got away this time, " + enemy.name + ". But I will defeat you, " + enemy.name + ", your life is now at " + enemy.health);
 }
 };

}

function Weapon(options){
    this.name = options.name || "a";
    this.damage = options.damage;
}


// characters

var IronMan = new Character({health: 1000, name: "Iron Man"});
var Vision =  new Character({health: 8000, name: "Vision"});
var Thor = new Character({health: 5000, name: "Thor"});
var BlackWidow =  new Character({health: 500, name: "Black Widow"});
var Hawkeye = new Character({health: 500, name: "Hawkeye"});
var Hulk = new Character({health: 5000, name: "Hulk"});
var CaptainAmerica = new Character({health: 3000, name: "Captain America"});


// enemies

var Loki = new Enemy ({health: 5000, name: "Loki"});
var Thanos = new Enemy ({health: 7000, name: "Thanos"});
var Ultron = new Enemy ({health: 6000, name: "Ultron"});

// weapons
var repulsorRays =  new Weapon({damage: 500, name: "repulsor-rays"});
var smash = new Weapon({damage: 200, name: "smash"});
var hammer = new Weapon({damage: 200, name: "hammer"});
var arrow = new Weapon({damage: 50, name: "arrow"});
var gun = new Weapon({damage: 100, name: "gun"});
var shield = new Weapon({damage: 150, name: "shield"});
var solarcell = new Weapon({damage: 300, name: "solar-cell"});
var magic = new Weapon({damage: 200, name: "magic"});
var superhuman = new Weapon({damage: 500, name: "superhuman"});
var robotic = new Weapon({damage: 300, name: "robotic"});

// equips
IronMan.equip(repulsorRays);
Vision.equip(solarcell);
Thor.equip(hammer);
Hulk.equip(smash);
BlackWidow.equip(gun);
Hawkeye.equip(arrow);
CaptainAmerica.equip(shield);
Loki.equip(magic);
Thanos.equip(superhuman);
Ultron.equip(robotic);
