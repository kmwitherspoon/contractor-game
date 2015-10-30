var opts = {
  name: "name",
  health: "2000"
};


function Character(options){
  var options = options || {};
  this.name = options.name || "A";
  this.health = options.health || 1000;
  this.weapon = new Weapon({name: "a", damage: "100"});
  this.img = options.img || 'www.fillmurray.com/200/300';
  this.action = options.action || 'www.fillmurray.com/200/300';
  this.audio = options.audio || 'audio_file.mp3';
  this.equip = function(weapon) {
    this.weapon = weapon;
  };
  this.attack = function(enemy){
    var randomInt = Math.floor(Math.random() * 10);
   if(randomInt < 4) {
     enemy.health = enemy.health - this.weapon.damage;
     if(enemy.health <= 0) {
       enemy.health = 0;
       $('.answers').append("<h2>The Avengers will always avenge the people of Earth. Your powers have failed you, " + enemy.name + ".</h2>");
     } else {
       $('.answers').append("<h2>The Avengers will not stop until you've been defeated, " + enemy.name + ", your life is now at " + enemy.health + ".</h2>");
     }

 } else {
   $('.answers').append("<h2>You got away this time, " + enemy.name + ". The Avengers will not stop until you've been defeated, " + enemy.name + ", your life is now at " + enemy.health + ".</h2>");
 }
 };

}

function Enemy(options) {
  var options = options || {};
  this.name = options.name || "A";
  this.health = options.health || 1000;
  this.weapon = new Weapon({name: "a", damage: "100"});
  this.image = options.img || 'www.fillmurray.com/200/300';
  this.equip = function(weapon) {
    this.weapon = weapon;
  };
  this.attack = function(enemy){
    var randomInt = Math.floor(Math.random() * 10);
   if(randomInt < 4) {
     enemy.health = enemy.health - this.weapon.damage;
     if(enemy.health <= 0) {
       enemy.health = 1;
       $('.answers').append("<h2>The Avengers will never die, " + enemy.name + ".</h2>");
     } else {
       $('.answers').append("<h2>I will finish you, " + enemy.name + ", your life is now at " + enemy.health + ".</h2>");
     }

 } else {
   $('.answers').append("<h2>You got away this time, " + enemy.name + ". But I will defeat you, " + enemy.name + ", your life is now at " + enemy.health + ".</h2>");
 }
 };

}

function Weapon(options){
    this.name = options.name || "a";
    this.damage = options.damage;
}



// weapons
var repulsorRays =  new Weapon({damage: 800, name: "repulsor-rays"});
var smash = new Weapon({damage: 1000, name: "smash"});
var hammer = new Weapon({damage: 1000, name: "hammer"});
var arrow = new Weapon({damage: 20, name: "arrow"});
var gun = new Weapon({damage: 200, name: "gun"});
var shield = new Weapon({damage: 500, name: "shield"});
var solarcell = new Weapon({damage: 1000, name: "solar-cell"});
var magic = new Weapon({damage: 500, name: "magic"});
var superhuman = new Weapon({damage: 1000, name: "superhuman"});
var robotic = new Weapon({damage: 1000, name: "robotic"});

var myCharacters = {
  ironman:  new Character({health: 1000, name: "Iron Man", img: 'ironman.png', action: 'kaboom.jpg', audio: 'ironman.mp3'}),
  vision: new Character({health: 8000, name: "Vision", img: 'Vision.png', action: 'boom.jpg', audio: 'vision.mp3' }),
  thor: new Character({health: 5000, name: "Thor", img: 'Thor.png', action: 'bam.jpg', audio: 'thor.mp3'}),
  blackwidow: new Character({health: 500, name: "Black Widow", img: 'black-widow-marvel-avengers-characters-1509400.png', action: 'bang.jpg', audio: 'Bang.mp3'}),
  hawkeye: new Character({health: 500, name: "Hawkeye", img: 'Hawkeye.png', action: 'wham.jpg', audio: 'bowandarrow.mp3'}),
  hulk: new Character({health: 5000, name: "Hulk", img: 'Hulk.png', action: 'bam.jpg', audio: 'hulk.mp3'}),
  captainamerica: new Character({health: 3000, name: "Captain America", img: 'Cap.png', action: 'wham.jpg', audio: 'bullies.mp3'})
};

var myEnemy = {
  loki: new Enemy({health: 5000, name: "Loki", img: 'SJPA_Loki_2.png'}),
  thanos: new Enemy({health: 7000, name: "Thanos", img: 'Thanos.PNG'}),
  ultron: new Enemy({health: 6000, name: "Ultron", img: 'Ultron.png'})
};

// equips
myCharacters.ironman.equip(repulsorRays);
myCharacters.vision.equip(solarcell);
myCharacters.thor.equip(hammer);
myCharacters.hulk.equip(smash);
myCharacters.blackwidow.equip(gun);
myCharacters.hawkeye.equip(arrow);
myCharacters.captainamerica.equip(shield);
myEnemy.loki.equip(magic);
myEnemy.thanos.equip(superhuman);
myEnemy.ultron.equip(robotic);
