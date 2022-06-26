var playerName = window.prompt("What's your robots name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("welcome to the Robot Gladiators");

    //subtract the value of 'playerAttack' 'from enemyHealth' and use that result to update 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    //log a resulting message to console
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining"
    )
    //subtract the value of 'enemyAttack' 'from playerHealth' and use that result to update 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    //log a resulting message to console
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining"
    )
};

fight()
