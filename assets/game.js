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
                playerMoney = playerMoney - 10;

                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //subtract the value of 'playerAttack' 'from enemyHealth' and use that result to update 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        
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
        playerHealth = playerHealth - enemyAttack;
        
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

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to the Robot Gladiators! Round " + (i+1));
    } else {
        window.alert("You have lost your robot in battle! Game Over!")
        break;
    }

    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
