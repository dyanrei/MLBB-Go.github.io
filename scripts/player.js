let player;

function Player(heroSelect, HP, physicalAttack, magicPower, physicalDef, magicRes, attackSpeed) {
    this.heroSelect = heroSelect;
    this.HP = HP;
    this.physicalAttack = physicalAttack;
    this.magicPower = magicPower;
    this.physicalDef = physicalDef;
    this.magicRes = magicRes;
    this.attackSpeed = attackSpeed;
}

let playerMoves = {
    calcAttack : function(){
        //first attack
        let getPlayerAttackSpeed = player.attackSpeed;
        let getEnemyAttackSpeed = enemy.attackSpeed;
        
        // player attack
    let playerAttack = function() {
        let calcBaseDamage;
            if(player.magicPower > 0){
                calcBaseDamage = (100 / 10 * (player.physicalAttack + player.magicPower)) / (enemy.physicalDef + enemy.magicRes);  
            } else {
                calcBaseDamage = (100 / 10 * (player.physicalAttack + player.magicPower)) / (enemy.physicalDef  + enemy.magicRes);
            }
                let offSetDamage = Math.floor(Math.random() * Math.floor(10));
                let calcOutputDamage = calcBaseDamage + offSetDamage;
                // # of hits
                let numberOfHits = (Math.floor(Math.random() * (10 - 5 + 1) + 5));      
                
                let attackValues = [calcOutputDamage, numberOfHits];
                return attackValues;
    }
    // enemy attack
    let enemyAttack = function() {
        let calcBaseDamage;
            if(enemy.magicPower > 0){
                calcBaseDamage = (100 / 10 * (enemy.physicalAttack + enemy.magicPower)) / (player.physicalDef + player.magicRes);  
            } else {
                calcBaseDamage = (100 / 10 * (enemy.physicalAttack  + enemy.magicPower)) / (player.physicalDef + player.magicRes);
            }
                let offSetDamage = Math.floor(Math.random() * Math.floor(20));
                let calcOutputDamage = calcBaseDamage + offSetDamage;
                // # of hits
                let numberOfHits = (Math.floor(Math.random() * (10 - 5 + 1) + 5));      
                
                let attackValues = [calcOutputDamage, numberOfHits];
                return attackValues;
    }
    
    //get header 
    let getHeader = document.querySelector(".header");
    //get buttton
    let getButton = document.querySelector(".btn-fight");
        
    //get div for attack result
    let getAttackResultPlayer = document.querySelector(".attackResult");
    let getAttackResultEnemy = document.querySelector(".attackResultEnemy");    
    
    getAttackResultPlayer.style.marginTop = "3%";
    
    //get health
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");

    //attack
    if(getPlayerAttackSpeed >= getEnemyAttackSpeed){
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.HP = enemy.HP - totalDamage;
        getAttackResultPlayer.innerHTML = "<p>You hit <span>" + playerAttackValues[0] + "</span> damage <span>" + playerAttackValues[1] + "</span> times. Total Damage: <span>" + totalDamage + "</span></p>";
            
            if(enemy.HP <= 0){
                getHeader.innerHTML = '<div class="header"><h1>Victory!</h1><a href="../index.html"><h6>&lt;&lt;Go back to main menu&lt;&lt;</h6></a></div>';
                getPlayerHealth.innerHTML = 'HP                            &xrarr;          ' + player.HP;
                getEnemyHealth.innerHTML = 'HP                            &xrarr;          0';
                getButton.style.pointerEvents = "none";
                getButton.style.cursor = "url(../img/not-allowed.png), auto !important";
                var audio = new Audio('../music/announcer/slain.ogg');
                    audio.play();
        
                setTimeout(function(){
                    var audioVoice = new Audio('../music/announcer/victory.ogg');
                    audioVoice.play();
                    }, 1600)
            } else {
                getEnemyHealth.innerHTML = 'HP                            &xrarr;          ' + enemy.HP;
                
                //enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.HP = player.HP - totalDamage;
        getAttackResultEnemy.innerHTML = "<p>Enemy hit <span>" + enemyAttackValues[0] + "</span> damage <span>" + enemyAttackValues[1] + "</span> times. Total Damage: <span>" + totalDamage + "</span></p>";
            
                    if(player.HP <= 0){
                        getHeader.innerHTML = '<div class="header"><h1>Defeat!</h1><a href="../index.html"><h6>&lt;&lt;Go back to main menu&lt;&lt;</h6></a></div>';
                        getPlayerHealth.innerHTML   = 'HP                            &xrarr;          0';
                        getEnemyHealth.innerHTML = 'HP                            &xrarr;          ' + enemy.HP;
                        getButton.style.pointerEvents = "none";
                        getButton.style.cursor = "url(../img/not-allowed.png), auto !important";
                        var audio = new Audio('../music/announcer/slained.ogg');
                    audio.play();
        
                setTimeout(function(){
                    var audioVoice = new Audio('../music/announcer/defeat.ogg');
                    audioVoice.play();
                    }, 1600)
                    } else {
                        getPlayerHealth.innerHTML = 'HP                            &xrarr;          ' + player.HP;
                    }
            }
            
    }//if enemy is faster
        //enemy attacks
        else if(getEnemyAttackSpeed >= getPlayerAttackSpeed){
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.HP = player.HP - totalDamage;
        getAttackResultPlayer.innerHTML = "<p>Enemy hit <span>" + enemyAttackValues[0] + "</span> damage <span>" + enemyAttackValues[1] + "</span> times. Total Damage: <span>" + totalDamage + "</span></p>";
            
            if(player.HP <= 0){
                getHeader.innerHTML = '<div class="header"><h1>Defeat!</h1><a href="../index.html"><h6>&lt;&lt;Go back to main menu&lt;&lt;</h6></a></div>';
                getEnemyHealth.innerHTML = 'HP                            &xrarr;          ' + enemy.HP;
                getPlayerHealth.innerHTML = 'HP                            &xrarr;          0';
                getButton.style.pointerEvents = "none";
                getButton.style.cursor = "url(../img/not-allowed.png), auto !important";
                var audio = new Audio('../music/announcer/slained.ogg');
                    audio.play();
        
                setTimeout(function(){
                    var audioVoice = new Audio('../music/announcer/defeat.ogg');
                    audioVoice.play();
                }, 1600)
            } else {
                getPlayerHealth.innerHTML = 'HP                            &xrarr;          ' + player.HP;
                
                //player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.HP = enemy.HP - totalDamage;
        getAttackResultEnemy.innerHTML = "<p>You hit <span>" + playerAttackValues[0] + "</span> damage <span>" + playerAttackValues[1] + "</span> times. Total Damage: <span>" + totalDamage + "</span></p>";
            
                    if(enemy.HP <= 0){
                        getHeader.innerHTML = '<div class="header"><h1>Victory!</h1><a href="../index.html"><h6>&lt;&lt;Go back to main menu&lt;&lt;</h6></a></div>';
                        getEnemyHealth.innerHTML   = 'HP                            &xrarr;          0';
                        getPlayerHealth.innerHTML = 'HP                            &xrarr;          ' + player.HP;
                        getButton.style.pointerEvents = "none";
                        getButton.style.cursor = "url(../img/not-allowed.png), auto !important";
                        var audio = new Audio('../music/announcer/slain.ogg');
                            audio.play();
        
                            setTimeout(function(){
                            var audioVoice = new Audio('../music/announcer/victory.ogg');
                            audioVoice.play();
                            }, 1600)
                    } else { 
                        getEnemyHealth.innerHTML = 'HP                            &xrarr;          ' + enemy.HP;
            }
            }
            
    }
    }
}



