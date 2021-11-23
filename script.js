var score = 0;
var clickingPower = 1;
var cursorCost = 15;
var cursors = 0;
var grandmaCost = 100;
var grandmas = 0;



function buyCursor() {
    if (score >= cursorCost) {
        score = score - cursorCost;
        cursors = cursors + 1;
        cursorCost = Math.round(cursorCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("cursorCost").innerHTML = cursorCost;
        document.getElementById("cursors").innerHTML = cursors;

    }
}
function addToScore(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}
function buyGrandma() {
    if (score >= grandmaCost) {
        score = score - grandmaCost;
        grandmas = grandmas + 1;
        grandmaCost = Math.round(grandmaCost * 1.20);

        document.getElementById("score").innerHTML = score;
        document.getElementById("grandmaCost").innerHTML = grandmaCost;
        document.getElementById("grandmas").innerHTML = grandmas;

    }
} 
function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"))
    if (typeof savedGame.score !== "undefined") score = savedGame.score; 
    if (typeof savedGame.clickingPower !== "undefined") clickingPower = savedGame.clickingPower;
    if (typeof savedGame.cursorCost !== "undefined") cursorCost = savedGame.cursorCost;
    if (typeof savedGame.cursors !== "undefined") cursors = savedGame.cursors;
    if (typeof savedGame.grandmas !== "undefined") grandmas = savedGame.grandmas;
    if (typeof savedGame.grandmaCost !== "undefined") grandmaCost = savedGame.grandmaCost;
}
function saveGame() {
    var gameSave = {
        score: score,
        clickingPower: clickingPower,
        cursorCost: cursorCost,
        cursors: cursors,
        grandmas: grandmas,
        grandmaCost: grandmaCost
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
  }

window.onload = function(){
    loadGame();
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("cursorCost").innerHTML = cursorCost;
    document.getElementById("cursors").innerHTML = cursors;
    document.getElementById("grandmas").innerHTML = grandmas;
    document.getElementById("grandmaCost").innerHTML = grandmaCost;
};
setInterval(function() {
    saveGame();
    score = score + cursors;
    score = score + grandmas;
    document.getElementById("score").innerHTML = score;
    document.title = score + "$ - Clicking.ml";
}, 1000); 