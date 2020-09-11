let GameManager = {
    setGameStart : function(heroSelect){
        this.resetPlayer(heroSelect);
        this.setPreFight();
        myPlay(heroSelect);
    },
    
    resetPlayer : function(heroSelect){
        switch(heroSelect){
                
            //MM
            case "Miya":
              player = new Player(heroSelect, 2524, 129, 0, 17, 10, 0.859); 
        break;            
            case "Layla":
              player = new Player(heroSelect, 2500, 130, 0, 15, 10, 0.882); 
        break;
            case "Bruno":
              player = new Player(heroSelect, 2522, 140, 0, 17, 10, 0.812); 
        break;
            case "Lesley":
                player = new Player(heroSelect, 2490, 120, 0, 14, 10, 0.829); 
        break;
            case "Claude":
                player = new Player(heroSelect, 2370, 115, 0, 14, 10, 0.831); 
        break;
            case "Clint":
                player = new Player(heroSelect, 2530, 115, 0, 20, 10, 0.842); 
        break;
            case "Moskov":
                player = new Player(heroSelect, 2530, 125, 0, 16, 10, 1.108); 
        break;
            case "Granger":
                player = new Player(heroSelect, 2490, 138, 0, 15, 10, 0.799); 
        break;
            case "Popol and Kupa":
                player = new Player(heroSelect, 2325, 105, 0, 17, 10, 0.801); 
        break;
            case "Hanabi":
                player = new Player(heroSelect, 2510, 120, 0, 17, 10, 0.851); 
        break;
            case "Irithel":
                player = new Player(heroSelect, 2540, 115, 0, 17, 10, 0.826); 
        break;
            case "Wanwan":
                player = new Player(heroSelect, 2540, 110, 0, 18, 10, 0.786); 
        break;
            case "Karrie":
                player = new Player(heroSelect, 2498, 112, 0, 21, 10, 0.839); 
        break;
            case "Kimmy":
                player = new Player(heroSelect, 2480, 111, 0, 18, 10, 1.000); 
        break;
	       case "Yi Sun-Shin":
                player = new Player(heroSelect, 2520, 124, 0, 18, 10, 0.897); 
        break;
                
            //ASSASSIN
            case "Fanny":
              player = new Player(heroSelect, 2526, 126, 0, 17, 10, 0.891); 
        break;
            case "Saber":
              player = new Player(heroSelect, 2599, 118, 0, 17, 10, 0.872); 
        break;
            case "Gusion":
                player = new Player(heroSelect, 2578, 110, 18, 17, 10, 0.892); 
        break;
            case "Hanzo":
                player = new Player(heroSelect, 2594, 118, 0, 17, 10, 0.877); 
        break;
            case "Hayabusa":
                player = new Player(heroSelect, 2629, 117, 0, 17, 10, 0.854); 
        break;
            case "Helcurt":
                player = new Player(heroSelect, 2559, 121, 0, 17, 10, 0.878); 
        break;
            case "Karina":
                player = new Player(heroSelect, 2490, 110, 11, 20, 10, 0.911); 
        break;
            case "Lancelot":
                player = new Player(heroSelect, 2549, 124, 0, 16, 10, 0.876); 
        break;
            case "Ling":
                player = new Player(heroSelect, 2578, 135, 0, 18, 10, 0.802); 
        break;
            case "Selena":
                player = new Player(heroSelect, 2401, 110, 15, 15, 10, 0.804); 
        break;
            case "Natalia":
                player = new Player(heroSelect, 2589, 121, 0, 18, 10, 0.834); 
        break;
                
                //FIGHTER
            case "Chou":
              player = new Player(heroSelect, 2708, 121, 0, 23, 10, 0.845); 
        break;
            case "Zilong":
              player = new Player(heroSelect, 2689, 123, 0, 25, 10, 0.962); 
        break;
            case "Aldous":
              player = new Player(heroSelect, 2718, 129, 0, 22, 10, 0.836); 
        break;            
            case "Alpha":
              player = new Player(heroSelect, 2646, 121, 0, 20, 10, 0.916); 
        break;
            case "Alucard":
              player = new Player(heroSelect, 2821, 123, 0, 21, 10, 0.979); 
        break;
            case "Argus":
                player = new Player(heroSelect, 2628, 124, 0, 21, 10, 0.916); 
        break;
            case "Badang":
                player = new Player(heroSelect, 2708, 120, 0, 20, 10, 0.831); 
        break;
            case "Balmond":
                player = new Player(heroSelect, 2736, 119, 0, 25, 10, 0.854); 
        break;
            case "Bane":
                player = new Player(heroSelect, 2559, 117, 0, 23, 10, 0.853); 
        break;
            case "Dyrroth":
                player = new Player(heroSelect, 2758, 117, 0, 22, 10, 0.916); 
        break;
            case "Freya":
                player = new Player(heroSelect, 2801, 114, 0, 22, 10, 0.804); 
        break;
            case "Guinevere":
                player = new Player(heroSelect, 2528, 111, 15, 18, 10, 0.916); 
        break;
            case "Jawhead":
                player = new Player(heroSelect, 2778, 119, 0, 19, 10, 0.849); 
        break;
            case "Khaleed":
                player = new Player(heroSelect, 2778, 109, 0, 23, 10, 0.844); 
        break;
            case "Lapu-Lapu":
                player = new Player(heroSelect, 2628, 119, 0, 21, 10, 0.911); 
        break;
            case "Leomord":
                player = new Player(heroSelect, 2738, 125, 0, 20, 10, 0.841); 
        break;
            case "Martis":
                player = new Player(heroSelect, 2738, 128, 0, 25, 10, 0.868); 
        break;
	        case "Masha":
                player = new Player(heroSelect, 2348, 125, 0, 16, 10, 0.949); 
        break;
	        case "Minsitthar":
              player = new Player(heroSelect, 2698, 119, 0, 21, 10, 0.846); 
        break;            
            case "Roger":
              player = new Player(heroSelect, 2730, 121, 0, 22, 10, 0.842); 
        break;
            case "Ruby":
              player = new Player(heroSelect, 2659, 129, 0, 23, 10, 0.858); 
        break;
            case "Silvanna":
                player = new Player(heroSelect, 2828, 116, 10, 22, 10, 0.916); 
        break;
            case "Sun":
                player = new Player(heroSelect, 2758, 114, 0, 23, 10, 0.917); 
        break;
            case "Thamuz":
                player = new Player(heroSelect, 2758, 115, 0, 24, 10, 0.873); 
        break;
            case "Terizla":
                player = new Player(heroSelect, 2728, 129, 0, 19, 10, 0.829); 
        break;
            case "X.Borg":
                player = new Player(heroSelect, 2518, 114, 0, 25, 10, 0.868); 
        break;
            case "Yu Zhong":
                player = new Player(heroSelect, 2898, 129, 0, 21, 10, 0.807); 
        break;
                
                //mage
            case "Valir":
              player = new Player(heroSelect, 2516, 110, 15, 18, 10, 0.823); 
        break;
            case "Lunox":
              player = new Player(heroSelect, 2521, 115, 18, 15, 10, 0.816); 
        break;
            case "Alice":
              player = new Player(heroSelect, 2573, 114, 10, 21, 10, 0.803); 
        break;            
            case "Aurora":
              player = new Player(heroSelect, 2441, 105, 15, 17, 10, 1.012); 
        break;
            case "Cecilion":
              player = new Player(heroSelect, 2425, 105, 18, 23, 10, 0.833); 
        break;
            case "Chang e":
                player = new Player(heroSelect, 2301, 115, 11, 16, 10, 0.808); 
        break;
            case "Cyclops":
                player = new Player(heroSelect, 2521, 112, 19, 18, 10, 0.816); 
        break;
            case "Esmeralda":
                player = new Player(heroSelect, 2573, 114, 17, 21, 10, 0.808); 
        break;
            case "Eudora":
                player = new Player(heroSelect, 2524, 112, 14, 19, 10, 0.799); 
        break;
            case "Gord":
                player = new Player(heroSelect, 2478, 110, 19, 23, 10, 0.772); 
        break;
            case "Harith":
                player = new Player(heroSelect, 2701, 115, 14, 22, 10, 0.867); 
        break;
            case "Harley":
                player = new Player(heroSelect, 2501, 114, 15, 19, 10, 0.896); 
        break;
            case "Kadita":
                player = new Player(heroSelect, 2556, 105, 19, 18, 10, 0.804); 
        break;
            case "Kagura":
                player = new Player(heroSelect, 2498, 118, 19, 20, 10, 0.816); 
        break;
            case "Luo Yi":
                player = new Player(heroSelect, 2601, 107, 18, 20, 10, 0.792); 
        break;
	       case "Lylia":
              player = new Player(heroSelect, 2501, 113, 18, 17, 10, 0.808); 
        break;            
            case "Odette":
              player = new Player(heroSelect, 2491, 105, 21, 18, 10, 0.813); 
        break;
            case "Pharsa":
              player = new Player(heroSelect, 2421, 109, 19, 17, 10, 0.791); 
        break;
            case "Vale":
                player = new Player(heroSelect, 2401, 109, 18, 19, 10, 0.828); 
        break;
            case "Vexana":
                player = new Player(heroSelect, 2421, 112, 18, 17, 10, 0.999); 
        break;
            case "Zhask":
                player = new Player(heroSelect, 2401, 107, 15, 21, 10, 0.809); 
        break;
                
                //tank
            case "Tigreal":
              player = new Player(heroSelect, 2890, 112, 0, 25, 15, 0.826); 
        break;
            case "Atlas":
              player = new Player(heroSelect, 2819, 135, 0, 21, 15, 0.792); 
        break;
            case "Akai":
              player = new Player(heroSelect, 2769, 115, 0, 24, 15, 0.851); 
        break;            
            case "Baxia":
              player = new Player(heroSelect, 2769, 125, 0, 24, 16, 0.802); 
        break;
            case "Belerick":
              player = new Player(heroSelect, 2819, 110, 0, 15, 20, 0.815); 
        break;
            case "Franco":
                player = new Player(heroSelect, 2709, 116, 0, 25, 14, 0.826); 
        break;
            case "Gatotkaca":
                player = new Player(heroSelect, 2629, 120, 0, 20, 16, 0.818); 
        break;
            case "Grock":
                player = new Player(heroSelect, 2819, 135, 0, 21, 15, 0.811); 
        break;
            case "Hilda":
                player = new Player(heroSelect, 2789, 123, 0, 24, 14, 0.842); 
        break;
            case "Hylos":
                player = new Player(heroSelect, 3109, 105, 0, 17, 17, 0.822); 
        break;
            case "Johnson":
                player = new Player(heroSelect, 2809, 112, 0, 27, 13, 0.826); 
        break;
            case "Khufra":
                player = new Player(heroSelect, 2709, 117, 0, 20, 17, 0.807); 
        break;
            case "Lolita":
                player = new Player(heroSelect, 2579, 115, 0, 27, 14, 0.786); 
        break;
            case "Minotaur":
                player = new Player(heroSelect, 2709, 123, 0, 18, 16, 0.732); 
        break;
            case "Uranus":
                player = new Player(heroSelect, 2689, 115, 0, 14, 20, 0.831); 
        break;
        
        
            //support
            case "Kaja":
              player = new Player(heroSelect, 2609, 120, 10, 30, 10, 0.843); 
        break;
            case "Faramis":
              player = new Player(heroSelect, 3100, 115, 15, 20, 10, 0.887); 
        break;
            case "Angela":
              player = new Player(heroSelect, 2421, 115, 9, 15, 10, 0.792); 
        break;            
            case "Carmilla":
              player = new Player(heroSelect, 2378, 118, 11, 16, 13, 0.807); 
        break;
            case "Diggie":
              player = new Player(heroSelect, 2351, 115, 8, 18, 10, 0.805); 
        break;
            case "Estes":
                player = new Player(heroSelect, 2221, 120, 8, 13, 10, 0.816); 
        break;
            case "Nana":
                player = new Player(heroSelect, 2501, 115, 10, 17, 10, 0.864); 
        break;
            case "Rafaela":
                player = new Player(heroSelect, 2441, 117, 9, 15, 10, 0.792); 
        break;

        }
        let getMarginTop = document.querySelector(".select-hero");
            getMarginTop.style.marginTop = "0px";
        let getInterface = document.querySelector(".select-hero");
            getInterface.innerHTML = '<div class="select-hero2"><img src="../img/all-heroes/' + heroSelect.toLowerCase() + '.jpg"><div class="class-interface-sword"><h3>' + heroSelect + '</h3><ul><li class="whitespace"><p class="health-player">HP                            &xrarr;          ' + player.HP + '</p></li><li class="whitespace">Physical Attack         &xrarr;          ' + player.physicalAttack + '</li><li class="whitespace">Magic Power            &xrarr;           ' + player.magicPower + '</li><li class="whitespace">Physical Defense     &xrarr;           ' + player.physicalDef + '</li><li class="whitespace">Magic Resistance    &xrarr;           ' + player.magicRes + '</li><li class="whitespace">Attack Speed           &xrarr;           ' + player.attackSpeed + '</li></ul></div></div>';
        let getFooter = document.querySelector(".hr-color");
        getFooter.style.marginTop = "20%";
        
    },
    
    setPreFight : function(){
        let getHeader = document.querySelector(".header");
        let getActionButton = document.querySelector(".action-btn");
        let getSearchBar = document.querySelector(".wrap");
        getHeader.innerHTML = '<div class="header"><h2>Find an enemy</h2>';
        getActionButton.innerHTML = '<br><br><div align="center"><a class="btn-search" href="#" rel="nofollow" onclick="GameManager.setFight()"><span>Search for an Enemy!&nbsp;</a></div>';
        getSearchBar.style.marginTop = "0%";
        getSearchBar.style.visibility = "hidden";

    },
    
    setFight : function(){
        let getHeader = document.querySelector(".header");
        let getActionButton = document.querySelector(".action-btn");
        let getEnemy = document.querySelector(".enemy");
        let getImageAction = document.querySelector(".class-interface-sword");
        
//        generate random enemy
        
        //mm enemy
        let enemy00 = new Enemy("Miya", 2524, 129, 0, 17, 10, 0.859);
        let enemy01 = new Enemy("Layla", 2500, 130, 0, 15, 10, 0.882);
        let enemy12 = new Enemy("Bruno", 2522, 140, 0, 17, 10, 0.812);
        let enemy13 = new Enemy("Lesley", 2490, 120, 0, 14, 10, 0.829);
        let enemy14 = new Enemy("Claude", 2370, 115, 0, 14, 10, 0.831);
        let enemy15 = new Enemy("Clint", 2530, 115, 0, 20, 10, 0.842);
        let enemy16 = new Enemy("Moskov", 2530, 125, 0, 16, 10, 1.108);
        let enemy17 = new Enemy("Granger", 2490, 138, 0, 15, 10, 0.799);
        let enemy18 = new Enemy("Popol and Kupa", 2325, 105, 0, 17, 10, 0.801);
        let enemy19 = new Enemy("Hanabi", 2510, 120, 0, 17, 10, 0.851);
        let enemy20 = new Enemy("Irithel", 2540, 115, 0, 17, 10, 0.826);
        let enemy21 = new Enemy("Wanwan", 2540, 110, 0, 18, 10, 0.786);
        let enemy22 = new Enemy("Karrie", 2498, 112, 0, 21, 10, 0.839);
        let enemy23 = new Enemy("Kimmy", 2480, 111, 0, 18, 10, 1.000);
        let enemy24 = new Enemy("Yi Sun-Shin", 2520, 124, 0, 18, 10, 0.897);

        //assassin enemy
        let enemy02 = new Enemy("Fanny", 2526, 126, 0, 17, 10, 0.891);
        let enemy03 = new Enemy("Saber", 2599, 118, 0, 17, 10, 0.872);
        let enemy25 = new Enemy("Gusion", 2578, 110, 18, 17, 10, 0.892);
        let enemy26 = new Enemy("Hanzo", 2594, 118, 0, 17, 10, 0.877);
        let enemy27 = new Enemy("Hayabusa", 2629, 117, 0, 17, 10, 0.854);
        let enemy28 = new Enemy("Helcurt", 2559, 121, 0, 17, 10, 0.878);
        let enemy29 = new Enemy("Karina", 2490, 110, 11, 20, 10, 0.911);
        let enemy30 = new Enemy("Lancelot", 2549, 124, 0, 16, 10, 0.876);
        let enemy31 = new Enemy("Ling", 2578, 135, 0, 18, 10, 0.802);
        let enemy32 = new Enemy("Selena", 2401, 110, 15, 15, 10, 0.804);
        let enemy33 = new Enemy("Natalia", 2589, 121, 0, 18, 10, 0.834);
        
        //fighter enemy
        let enemy04 = new Enemy("Chou", 2708, 121, 0, 23, 10, 0.845);
        let enemy05 = new Enemy("Zilong", 2689, 123, 0, 25, 10, 0.962);
        let enemy34 = new Enemy("Aldous", 2718, 129, 0, 22, 10, 0.836);
        let enemy35 = new Enemy("Alpha", 2646, 121, 0, 20, 10, 0.916);
        let enemy36 = new Enemy("Alucard", 2821, 123, 0, 21, 10, 0.979);
        let enemy37 = new Enemy("Argus", 2628, 124, 0, 21, 10, 0.916);
        let enemy38 = new Enemy("Badang", 2708, 120, 0, 20, 10, 0.831);
        let enemy39 = new Enemy("Balmond", 2736, 119, 0, 25, 10, 0.854);
        let enemy40 = new Enemy("Bane", 2559, 117, 0, 23, 10, 0.853);
        let enemy41 = new Enemy("Dyrroth", 2758, 117, 0, 22, 10, 0.916);
        let enemy42 = new Enemy("Freya", 2801, 114, 0, 22, 10, 0.804);
        let enemy43 = new Enemy("Guinevere", 2528, 111, 15, 18, 10, 0.916);
        let enemy44 = new Enemy("Jawhead", 2778, 119, 0, 19, 10, 0.849);
        let enemy45 = new Enemy("Khaleed", 2778, 109, 0, 23, 10, 0.844);
        let enemy46 = new Enemy("Lapu-Lapu", 2628, 119, 0, 21, 10, 0.911);
        let enemy47 = new Enemy("Leomord", 2738, 125, 0, 20, 10, 0.841);
        let enemy48 = new Enemy("Martis", 2738, 128, 0, 25, 10, 0.868);
        let enemy49 = new Enemy("Masha", 2348, 125, 0, 16, 10, 0.949);
        let enemy50 = new Enemy("Minsitthar", 2698, 119, 0, 21, 10, 0.846);
        let enemy51 = new Enemy("Roger", 2730, 121, 0, 22, 10, 0.842);
        let enemy52 = new Enemy("Ruby", 2659, 129, 0, 23, 10, 0.858);
        let enemy53 = new Enemy("Silvanna", 2828, 116, 10, 22, 10, 0.916);
        let enemy54 = new Enemy("Sun", 2758, 114, 0, 23, 10, 0.917);
        let enemy55 = new Enemy("Thamuz", 2758, 115, 0, 24, 10, 0.873);
        let enemy56 = new Enemy("Terizla", 2728, 129, 0, 19, 10, 0.829);
        let enemy57 = new Enemy("X.Borg", 2518, 114, 0, 25, 10, 0.868);
        let enemy58 = new Enemy("Yu Zhong", 2898, 129, 0, 21, 10, 0.807);
        
        //mage enemy
        let enemy06 = new Enemy("Valir", 2516, 110, 15, 18, 10, 0.823);
        let enemy07 = new Enemy("Lunox", 2521, 115, 18, 15, 10, 0.816);
        let enemy59 = new Enemy("Alice", 2573, 114, 10, 21, 10, 0.803);
        let enemy60 = new Enemy("Aurora", 2441, 105, 15, 17, 10, 1.012);
        let enemy61 = new Enemy("Cecilion", 2425, 105, 18, 23, 10, 0.833);
        let enemy62 = new Enemy("Chang e", 2301, 115, 11, 16, 10, 0.808);
        let enemy63 = new Enemy("Cyclops", 2521, 112, 19, 18, 10, 0.816);
        let enemy64 = new Enemy("Esmeralda", 2573, 114, 17, 21, 10, 0.808);
        let enemy65 = new Enemy("Eudora", 2524, 112, 14, 19, 10, 0.799);
        let enemy66 = new Enemy("Gord", 2478, 110, 19, 23, 10, 0.772);
        let enemy67 = new Enemy("Harith", 2701, 115, 14, 22, 10, 0.867);
        let enemy68 = new Enemy("Harley", 2501, 114, 15, 19, 10, 0.896);
        let enemy69 = new Enemy("Kadita", 2556, 105, 19, 18, 10, 0.804);
        let enemy70 = new Enemy("Kagura", 2498, 118, 19, 20, 10, 0.816);
        let enemy71 = new Enemy("Luo Yi", 2601, 107, 18, 20, 10, 0.792);
        let enemy72 = new Enemy("Lylia", 2501, 113, 18, 17, 10, 0.808);
        let enemy73 = new Enemy("Odette", 2491, 105, 21, 18, 10, 0.813);
        let enemy74 = new Enemy("Pharsa", 2421, 109, 19, 17, 10, 0.791);
        let enemy75 = new Enemy("Vale", 2401, 109, 18, 19, 10, 0.828);
        let enemy76 = new Enemy("Vexana", 2421, 112, 18, 17, 10, 0.999);
        let enemy77 = new Enemy("Zhask", 2401, 107, 15, 21, 10, 0.809);
        
        //tank enemy
        let enemy08 = new Enemy("Tigreal", 2890, 112, 0, 25, 15, 0.826);
        let enemy09 = new Enemy("Atlas", 2819, 135, 0, 21, 15, 0.792);
        let enemy78 = new Enemy("Akai", 2769, 115, 0, 24, 15, 0.851);
        let enemy79 = new Enemy("Baxia", 2769, 125, 0, 24, 16, 0.802);
        let enemy80 = new Enemy("Belerick", 2819, 110, 0, 15, 20, 0.815);
        let enemy81 = new Enemy("Franco", 2709, 116, 0, 25, 14, 0.826);
        let enemy82 = new Enemy("Gatotkaca", 2629, 120, 0, 20, 16, 0.818);
        let enemy83 = new Enemy("Hilda", 2789, 123, 0, 24, 14, 0.842);
        let enemy84 = new Enemy("Hylos", 3109, 105, 0, 17, 17, 0.822);
        let enemy85 = new Enemy("Johnson", 2809, 112, 0, 27, 13, 0.826);
        let enemy86 = new Enemy("Khufra", 2709, 117, 0, 20, 17, 0.807);
        let enemy87 = new Enemy("Lolita", 2579, 115, 0, 27, 14, 0.786);
        let enemy88 = new Enemy("Minotaur", 2709, 123, 0, 18, 16, 0.732);
        let enemy89 = new Enemy("Uranus", 2689, 115, 0, 14, 20, 0.831);
        let enemy90 = new Enemy("Grock", 2819, 135, 0, 21, 15, 0.811)
        
        //support enemy
        let enemy10 = new Enemy("Kaja", 2609, 120, 10, 30, 10, 0.843);
        let enemy11 = new Enemy("Faramis", 3100, 115, 15, 20, 10, 0.887);
        let enemy91 = new Enemy("Angela", 2421, 115, 9, 15, 10, 0.792);
        let enemy92 = new Enemy("Carmilla", 2378, 118, 11, 16, 13, 0.807);
        let enemy93 = new Enemy("Diggie", 2351, 115, 8, 18, 10, 0.805);
        let enemy94 = new Enemy("Estes", 2221, 120, 8, 13, 10, 0.816);
        let enemy95 = new Enemy("Nana", 2501, 115, 10, 17, 10, 0.864);
        let enemy96 = new Enemy("Rafaela", 2441, 117, 9, 15, 10, 0.792);

        
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(97));
        switch(chooseRandomEnemy){
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
            case 4:
                enemy = enemy04;
                break;
            case 5:
                enemy = enemy05;
                break;
            case 6:
                enemy = enemy06;
                break;
            case 7:
                enemy = enemy07;
                break;
            case 8: 
                enemy = enemy08;
                break;
            case 9:
                enemy = enemy09;
                break;
            case 10:
                enemy = enemy10;
                break;
            case 11:
                enemy = enemy11;
                break;
            case 12:
                enemy = enemy12;
                break;
            case 13:
                enemy = enemy13;
                break;
            case 14:
                enemy = enemy14;
                break;
            case 15:
                enemy = enemy15;
                break;
            case 16:
                enemy = enemy16;
                break;
            case 17:
                enemy = enemy17;
                break;
            case 18:
                enemy = enemy18;
                break;
            case 19:
                enemy = enemy19;
                break;
            case 20: 
                enemy = enemy20;
                break;
            case 21:
                enemy = enemy21;
                break;
            case 22:
                enemy = enemy22;
                break;
            case 23:
                enemy = enemy23;
                break;
            case 24:
                enemy = enemy24;
                break;
            case 25:
                enemy = enemy25;
                break;
            case 26:
                enemy = enemy26;
                break;
            case 27:
                enemy = enemy27;
                break;
            case 28:
                enemy = enemy28;
                break;
            case 29: 
                enemy = enemy29;
                break;
            case 30:
                enemy = enemy30;
                break;
            case 31:
                enemy = enemy31;
                break;
            case 32:
                enemy = enemy32;
                break;
            case 33:
                enemy = enemy33;
                break;
            case 34:
                enemy = enemy34;
                break;
            case 35:
                enemy = enemy35;
                break;
            case 36:
                enemy = enemy36;
                break;
            case 37:
                enemy = enemy37;
                break;
            case 38:
                enemy = enemy38;
                break;
            case 39:
                enemy = enemy39;
                break;
            case 40:
                enemy = enemy40;
                break;
            case 41: 
                enemy = enemy41;
                break;
            case 42:
                enemy = enemy42;
                break;
            case 43:
                enemy = enemy43;
                break;
            case 44:
                enemy = enemy44;
                break;
            case 45:
                enemy = enemy45;
                break;
            case 46:
                enemy = enemy46;
                break;
            case 47:
                enemy = enemy47;
                break;
            case 48:
                enemy = enemy48;
                break;
            case 49:
                enemy = enemy49;
                break;
            case 50:
                enemy = enemy50;
                break;
            case 51:
                enemy = enemy51;
                break;
            case 52:
                enemy = enemy52;
                break;
            case 53: 
                enemy = enemy53;
                break;
            case 54:
                enemy = enemy54;
                break;
            case 55:
                enemy = enemy55;
                break;
            case 56:
                enemy = enemy56;
                break;
            case 57:
                enemy = enemy57;
                break;
            case 58:
                enemy = enemy58;
                break;
            case 59:
                enemy = enemy59;
                break;
            case 60:
                enemy = enemy60;
                break;
            case 61:
                enemy = enemy61;
                break;
            case 62:
                enemy = enemy62;
                break;
            case 63:
                enemy = enemy63;
                break;
            case 64:
                enemy = enemy64;
                break;
            case 65:
                enemy = enemy65;
                break;
            case 66: 
                enemy = enemy66;
                break;
            case 67:
                enemy = enemy67;
                break;
            case 68:
                enemy = enemy68;
                break;
            case 69:
                enemy = enemy69;
                break;
            case 70:
                enemy = enemy70;
                break;
            case 71:
                enemy = enemy71;
                break;
            case 72:
                enemy = enemy72;
                break;
            case 73:
                enemy = enemy73;
                break;
            case 74:
                enemy = enemy74;
                break;
            case 75:
                enemy = enemy75;
                break;
            case 76:
                enemy = enemy76;
                break;
            case 77:
                enemy = enemy77;
                break;
            case 78:
                enemy = enemy78;
                break;
            case 79:
                enemy = enemy79;
                break;
            case 80:
                enemy = enemy80;
                break;
            case 81:
                enemy = enemy81;
                break;
            case 82:
                enemy = enemy82;
                break;
            case 83:
                enemy = enemy83;
                break;
            case 84:
                enemy = enemy84;
                break;
            case 85: 
                enemy = enemy85;
                break;
            case 86:
                enemy = enemy86;
                break;
            case 87:
                enemy = enemy87;
                break;
            case 88:
                enemy = enemy88;
                break;
            case 89:
                enemy = enemy89;
                break;
            case 90:
                enemy = enemy90;
                break;
            case 91:
                enemy = enemy91;
                break;
            case 92:
                enemy = enemy92;
                break;
            case 93:
                enemy = enemy93;
                break;
            case 94:
                enemy = enemy94;
                break;
            case 95:
                enemy = enemy95;
                break;
            case 96:
                enemy = enemy96;
                break;

        }
        
        getHeader.innerHTML = '<div class="header"><h2>A wild ' + enemy.enemySelect + ' has appeared</h2><h4>Defeat the enemy!</h4></h2></div>';
        getActionButton.innerHTML = '<br><br><div align="center"><a class="btn-fight" rel="nofollow" onclick="playerMoves.calcAttack(); fightSound();"><span>Attack the Enemy!&nbsp;</a></div>';
        getImageAction.style.backgroundImage = "url(../img/class/attack.gif)";
        
        
        getEnemy.innerHTML = '<div class="select-hero3"><img src="../img/all-heroes/' + enemy.enemySelect.toLowerCase() + '.jpg"><div class="class-interface-swordEnemy"><h3>' + enemy.enemySelect + '</h3><ul><li class="whitespace"><p class="health-enemy">HP                            &xrarr;          ' + enemy.HP + '</p></li><li class="whitespace">Physical Attack         &xrarr;          ' + enemy.physicalAttack + '</li><li class="whitespace">Magic Power            &xrarr;           ' + enemy.magicPower + '</li><li class="whitespace">Physical Defense     &xrarr;           ' + enemy.physicalDef + '</li><li class="whitespace">Magic Resistance    &xrarr;           ' + enemy.magicRes + '</li><li class="whitespace">Attack Speed           &xrarr;           ' + enemy.attackSpeed + '</li></ul></div></div>';
        
        var audio = new Audio('../music/pick-names/' + enemy.enemySelect.toLowerCase() + '.mp3');
        audio.play();
        
        setTimeout(function(){
        var audioVoice = new Audio('../music/hero-voices/' + enemy.enemySelect.toLowerCase() + 'voice.mp3');
        audioVoice.play();
        }, 1600)
        
        let getFooter = document.querySelector(".hr-color");
        getFooter.style.marginTop = "5%";
    }
    
}
    //mm sound
        function delayMM (URL) {
            setTimeout( function() { window.location = "select-character/select-mm.html" }, 600 );
        }
    //assassin sound
        function delayAssa (URL) {
            setTimeout( function() { window.location = "select-character/select-assa.html" }, 600 );
        }
    //fighter sound
        function delayFighter (URL) {
            setTimeout( function() { window.location = "select-character/select-fighter.html" }, 600 );
        }
    //mage sound
        function delayMage (URL) {
            setTimeout( function() { window.location = "select-character/select-mage.html" }, 600 );
        }
    //tank sound
        function delayTank (URL) {
            setTimeout( function() { window.location = "select-character/select-tank.html" }, 600 );
        }
    //support sound
        function delaySupp (URL) {
            setTimeout( function() { window.location = "select-character/select-supp.html" }, 600 );
        }
    //mm sound
        function delayAll (URL) {
            setTimeout( function() { window.location = "select-character/select-all.html" }, 600 );
        }
        
        //hero name sound
        function myPlay(heroSelect){
        var audio = new Audio();
        audio.src = "../music/pick-names/" + heroSelect + ".mp3";
        audio.play();
        }
    
//    search hero
        $(document).ready(function () {
            
            
        $(".name").hide();
            
        $("#searchFor").keyup(function(){
            
            // Retrieve the input field text 
            var filter = $(this).val();

            // Loop through the captions div
            $(".images").each(function(){
            


            // If the div item does not contain the text phrase fade it out    
            if ($(this).attr('title').search(new RegExp(filter, "i")) < 0) {
            $(this).fadeOut();
            
            $(".speaker").each(function(){
                if ($(this).attr('title').search(new RegExp(filter, "i")) < 0) {
            $(this).fadeOut();
                } else {
            $(this).show();
            $(".speaker").show();
                }
                });
        // Show the div item if the phrase matches 
        } else {
            $(this).show();
            $(".speaker").show();
        }
            });
        });
     });

    // hero voices
    function playAudio(url) {
    new Audio(url).play();
    }
    
    //fight sound
    function fightSound() {
        var sound = new Audio('../music/fight-sound.mp3');
        sound.play(); 
    }