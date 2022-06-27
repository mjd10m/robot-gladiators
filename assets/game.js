var playerName = window.prompt("What's your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

var enemyNames = ["Roberto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    window.alert("welcome to the Robot Gladiators");
    
    //does the palyer want to fight?
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose.")

    // if player choose to fight then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        //subtract the value of 'playerAttack' 'from enemyHealth' and use that result to update 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        
        //log a resulting message to console
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining"
        );
        
        //subtract the value of 'enemyAttack' 'from playerHealth' and use that result to update 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        
        //log a resulting message to console
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining"
        );
        
        //check enemys health
        if (enemyHealth<= 0) {
            window.alert(enemyName + " has died!");
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        //check player health
        if (playerHealth<= 0) {
            window.alert(playerName + " has died!")
        } 
        
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    // if player chooses skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");

            //subtract playerMoney
            playerMoney = playerMoney - 2;
        } else {
            fight()
        }
    }

    //if player enter invalid option
    else {
        window.alert("You need to choose a valid option.  Try again!");
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
