var playerName = window.prompt("What's your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

var enemyNames = ["Roberto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    
    while(enemyHealth > 0 && playerHealth > 0) {

        //does the palyer want to fight?
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose.")

        // if player chooses skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");

                //subtract playerMoney
                playerMoney = Math.max(0, playerMoney - 10);

                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //subtract the value of 'playerAttack' 'from enemyHealth' and use that result to update 'enemyHealth' variable
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        
        //log a resulting message to console
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining"
        );

        //check enemys health
        if (enemyHealth<= 0) {
            window.alert(enemyName + " has died!");

            //award money for winning
            playerMoney = playerMoney + 20
            break;
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        //subtract the value of 'enemyAttack' 'from playerHealth' and use that result to update 'playerHealth' variable
        var damage = randomNumber(enemyAttack-3, enemyAttack)
        playerHealth = Math.max(0, playerHealth - damage);
        
        //log a resulting message to console
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining"
        );
        
        //check player health
        if (playerHealth<= 0) {
            window.alert(playerName + " has died!");
            break;
        } 
        
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        //if player enter invalid option
    }
}

//function to start game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to the Robot Gladiators! Round " + (i+1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
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
    if (playerHealth > 0) {
        window.alert("Great Job, you'vr survived the game!  You now have a score of " + playerMoney + ".");
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
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney -7;
            } else {
                window.alert("You dont have enough money!")
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            } else {
                window.alert("You dont have enough money!")
            }
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

//start game when page loads
startGame()