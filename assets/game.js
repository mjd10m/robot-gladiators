var fight = function(enemy) {
    
    while(enemy.health > 0 && playerInfo.health > 0) {

        //does the palyer want to fight?
        if (fightOrSkip()) {
            break;
        }

        //subtract the value of 'playerAttack' 'from enemy.health' and use that result to update 'enemy.health' variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        
        //log a resulting message to console
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining"
        );

        //check enemys health
        if (enemy.health<= 0) {
            window.alert(enemy.name + " has died!");

            //award money for winning
            playerInfo.money = playerInfo.money + 20
            break;
        } 
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        
        //subtract the value of 'enemy.attack' 'from playerHealth' and use that result to update 'playerHealth' variable
        var damage = randomNumber(enemy.attack-3, enemy.attack)
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        
        //log a resulting message to console
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining"
        );
        
        //check player health
        if (playerInfo.health<= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } 
        
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        //if player enter invalid option
    }
}

//function to start game
var startGame = function() {
    // reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to the Robot Gladiators! Round " + (i+1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                shop();
                };
            };
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //play again
    endGame();
};
var endGame = function() {
    window.alert("The game has now ended.  Let's see how you did!");
    //if player is still alive
    if (playerInfo.health > 0) {
        window.alert("Great Job, you'vr survived the game!  You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, Upgrade your attack, or Leave the store?  Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice");
    switch(shopOptionPrompt) {
        case "refill":
        case "REFIL":
            playerInfo.refillHealth();
            break;
        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack()
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name");
    }
    console.log("Your robot's name is " + name);
    return name;
};
var fightOrSkip = function() {
    var promptFight = window.prompt('Would you like to Fight or Skip this battle?  Enter "FIGHT" or "SKIP" to choose.')
    if(promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight.  Goodbye!");
            playerInfo.playerMoney = playerInfo.money - 10;
            return true;
        }
    }
}
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars." );
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars." );
            this.attack += 6;
            this.money -=7;
        } else {
            window.alert("You don't have enough money");
        }
    }
};
    
    var enemyInfo = [
        {
            name: "Roborto",
            attack: randomNumber(10, 14)
        },
        {
            name: "Amy Android",
            attack: randomNumber(10, 14)
        },
        {
            name: "Robo Trumble",
            attack: randomNumber(10, 14)
        }
    ];

//start game when page loads
startGame()