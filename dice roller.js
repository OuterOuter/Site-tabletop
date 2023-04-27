function rolldice(){
    var rogue= document.getElementById("rol");
    var die1= Math.floor(Math.random()*20)+1;
    rogue.innerHTML= die1;
    stastus.innerHTML= die1;
}