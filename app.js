var play = confirm("Let's save the world!");

var chooseA = prompt("Choose an avenger to use in battle. (ironman, blackwidow, thor, hulk, captainamerica, hawkeye, vision)");
var hero = myCharacters[chooseA];
$('.fighters').append('<img src="' + hero.img + '">');

var chooseE = prompt("Choose an enemy.");
var enemy = myEnemy[chooseE];
console.log("ENEMY", enemy);
$('.enemies').append('<img src="' + enemy.image + '">');
$('.attackbtn').css('display', 'block');

$('.attackbtn').on('click', function(event){
  $('.fighters').append('<audio autoplay src="' + hero.audio + '"></audio>');
  console.log(hero.audio);
  $('.wrapper').append('<img class="actions" src="' + hero.action + '">');
  $('.fighters').css('display', 'none');
  $('.enemies').css('display', 'none');
  $('.actions').css('display', 'block');
  $('.attackbtn').css('display', 'none');
  $('.resultsbtn').css('display', 'block');

});

$('.resultsbtn').on('click', function(event){
  $('.resultsbtn').css('display', 'none');
  $('.actions').css('display', 'none');
  $('.answers').css('display', 'block');
  enemy.attack(enemy);
  $('audio').trigger('pause');
  $('.gamebtn').css('display', 'block');
  $('.fighters img').css('display', 'none');
  $('.enemies img').css('display', 'none');
});

$('.gamebtn').on('click', function(event) {
  location.reload();
})
