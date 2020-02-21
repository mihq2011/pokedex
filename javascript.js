
var pokemonDB = [
    {
      name: 'charmander',
      type: 'fire',
      hp: 39,
      attack: 52,
      defense: 39,
      level: 1,
      img: 'http://www.smogon.com/dex/media/sprites/xy/charmander.gif'
    },
    {
      name: 'bulbasaur',
      type: 'earth',
      hp:45,
      attack: 49,
      defense: 49,
      level: 1,
      img: 'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif'
    },
    {
        name: 'squirtle',
        type: 'water',
        hp: 44,
        attack: 48,
        defense: 65,
        level: 1,
        img: 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
      },
    
  ]



var gameState = {
    userPokemon: '',
    rivalPokemon: ''

}


var pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character')
var battleScreenEl = document.getElementById('battle-screen')
var attackBtnsEl = document.getElementById('battle-screen').querySelectorAll('.attack')

// This is the initial loop
var i = 0;
while(i < pokemonsEl.length) {
    pokemonsEl[i].onclick = function () {
        var pokemonName = this.dataset.pokemon
        var player1Img = document.querySelector('.player1').getElementsByTagName('img')
        var player2Img = document.querySelector('.player2').getElementsByTagName('img')


        gameState.userPokemon = pokemonName
        function cpuPick() {
            gameState.rivalPokemon = pokemonsEl[randomNumber(0,3)].dataset.pokemon
        }
        cpuPick()
        battleScreenEl.classList.toggle('active')
        
        gameState.currentPokemon = pokemonDB.filter(function(pokemon) {
            return pokemon.name == gameState.userPokemon
        })
        
        gameState.currentRivalPokemon = pokemonDB.filter(function(pokemon) {
            return pokemon.name == gameState.rivalPokemon
        })

        player1Img[0].src = gameState.currentPokemon[0].img
        player2Img[0].src = gameState.currentRivalPokemon[0].img

        //current user and cpu pokemon initial health 
        gameState.currentPokemon[0].health = calculateInitialHealth(gameState.currentPokemon)

        gameState.currentRivalPokemon[0].health = calculateInitialHealth(gameState.currentRivalPokemon)
        
        console.log(gameState)
    }
    i++
}

var a = 0;
while(a < attackBtnsEl.length) {
    attackBtnsEl[a].onclick = function() {
        var attackName = this.dataset.attack
        gameState.currentUserAttack = attackName
        play(attackName, cpuAttack())
    }
    a++
}

var cpuAttack = function() {
    var attacks = ['rock','paper','scissors']

    return attacks[randomNumber(0,3)]
}

var calculateInitialHealth = function(user) {

    return((0.20 * Math.sqrt(user[0].level)) * user[0].defense) * user[0].hp
}

var attackMove = function(attack, level, stack, critical, enemy, attacker) {
    var attackAmount = ((attack * level) * (stack * critical))
    enemy.health = enemy.health - attackAmount
    checkWinner(enemy, attacker)
    console.log(enemy.name + ' after: ' + enemy.health)
}

var checkWinner = function(enemy, attacker) {
    if(enemy.health <= 0) {
        console.log('Hey Winnerrrrrrrrrrr' + attack.name)
    }
}

var play = function(userAttack, cpuAttack) {
    var currentPokemon = gameState.currentPokemon[0]
    var currentRivalPokemon = gameState.currentRivalPokemon[0]
    switch(userAttack) {
        case 'rock':
            if(cpuAttack == 'paper') {
                if(currentRivalPokemon.health >= 1 && currentRivalPokemon >= 1) { 
                //user
                attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon, currentPokemon)
                if(currentRivalPokemon.health >= 1) {
                //cpu
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon, currentRivalPokemon)
                }
            }
            }
            if (cpuAttack == 'scissors') {
                if(currentRivalPokemon.health >= 1 && currentRivalPokemon >= 1) { 
                //user
                attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon, currentPokemon)
                if(currentRivalPokemon.health >= 1) {
                //cpu
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon, currentRivalPokemon)
                }
            }
            }
            if(cpuAttack == 'rock') {
                if(currentRivalPokemon.health >= 1 && currentRivalPokemon >= 1) { 
                //user
                attackMove(currentPokemon.attack, currentPokemon.level, .8, .1, currentRivalPokemon, currentPokemon)
                if(currentRivalPokemon.health >= 1) {
                //cpu
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon, currentRivalPokemon)
                } 
            }
            }
            break;
        case 'paper':
            if(cpuAttack == 'paper') {
                if(currentRivalPokemon.health >= 1 && currentRivalPokemon >= 1) { 
                //user
                attackMove(currentPokemon.attack, currentPokemon.level, .8, .1, currentRivalPokemon, currentPokemon)
                if(currentRivalPokemon.health >= 1) {
                //cpu
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon, currentRivalPokemon)
                }
            }
            }
            if(cpuAttack == 'scissors') {
                if(currentRivalPokemon.health >= 1 && currentRivalPokemon >= 1) { 
                //user
                attackMove(currentPokemon.attack, currentPokemon.level, .8, 5, currentRivalPokemon, currentPokemon)
                if(currentRivalPokemon.health >= 1) {
                //cpu
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon, currentRivalPokemon)
                }
            }
            }
            if(cpuAttack == 'rock') {
                if(currentRivalPokemon.health >= 1 && currentRivalPokemon >= 1) { 
                //user
                attackMove(currentPokemon.attack, currentPokemon.level, .8, .2, currentRivalPokemon, currentPokemon)
                if(currentRivalPokemon.health >= 1) {
                //cpu
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon, currentRivalPokemon)
                }
            }
            }
            break;
        case 'scissors':
        if(cpuAttack == 'paper') {
            if(currentRivalPokemon.health >= 1 && currentRivalPokemon >= 1) { 
            //user
            attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon, currentPokemon)
            if(currentRivalPokemon.health >= 1) {
            //cpu
            attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon, currentRivalPokemon)
            }
         }
        }
        if (cpuAttack == 'scissors') {
            if(currentRivalPokemon.health >= 1 && currentRivalPokemon >= 1) { 
            //user
            attackMove(currentPokemon.attack, currentPokemon.level, .8, 1, currentRivalPokemon, currentPokemon)
            if(currentRivalPokemon.health >= 1) {
            //cpu
            attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon, currentRivalPokemon)
            }
        }
        }
        if(cpuAttack == 'rock') {
            if(currentRivalPokemon.health >= 1 && currentRivalPokemon >= 1) { 
            //user
            attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon, currentPokemon)
            if(currentRivalPokemon.health >= 1) {
            //cpu
            attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon, currentRivalPokemon)
            }
        }
        }
            break;
    }
}

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}