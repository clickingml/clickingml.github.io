// Variables
var score = 0;
var clickingPower = 1;
// Shop costs
var cursorCost = 25;
var cursors = 0;

var grandmaCost = 100;
var grandmas = 0;

var bakeryCost = 300;
var bakeries = 0;

var treeCost = 500;
var trees = 0;

var footballs = 0
var footballCost = 1000;

var factoryCost = 9000;
var factories
// Upgrade costs
var twoclickCost = 10000;
var clicktwo = 0;

var threeclickCost = 20000;
var clickthree = 0;
// Shops

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

function buyGrandma() {
    if (score >= grandmaCost) {
        score = score - grandmaCost;
        grandmas = grandmas + 1;
        grandmaCost = Math.round(grandmaCost * 1.10);

        document.getElementById("score").innerHTML = score;
        document.getElementById("grandmaCost").innerHTML = grandmaCost;
        document.getElementById("grandmas").innerHTML = grandmas;

    }
} 
function buyBakery() {
    if (score >= bakeryCost) {
        score = score - bakeryCost;
        bakeries = bakeries + 2;
        bakeryCost = Math.round(bakeryCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("bakeryCost").innerHTML = bakeryCost;
        document.getElementById("bakeries").innerHTML = bakeries;

    }
} 

function buyTree() {
    if (score >= treeCost) {
        score = score - treeCost;
        trees = trees + 1;
        treeCost = Math.round(treeCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("treeCost").innerHTML = treeCost;
        document.getElementById("trees").innerHTML = trees;

    }
} 

function buyFootball() {
    if (score >= footballCost) {
        score = score - footballCost;
        footballs = footballs + 1;
        footballCost = Math.round(footballCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("footballCost").innerHTML = footballCost;
        document.getElementById("footballs").innerHTML = footballs;

    }
} 

function buyFactory() {
    if (score >= factoryCost) {
        score = score - factoryCost;
        factories = factories + 1;
        factoryCost = Math.round(factoryCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("factoryCost").innerHTML = footballCost;
        document.getElementById("factories").innerHTML = footballs;
    }
} 
// Upgrades

function upgradeclick1() {

    if (score >= twoclickCost) {
        clickingPower = 2;
        score = score - twoclickCost;
        clicktwo = clicktwo + 1;
        twoclickCost = Math.round(twoclickCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("twoclickCost").innerHTML = twoclickCost;
        document.getElementById("clicktwo").innerHTML = clicktwo;
        upgradeclick = function(){};

    }
} 
function upgradeclick2() {

    if (score >= threeclickCost) {
        clickingPower = 4;
        score = score - threeclickCost;
        clickthree = clickthree + 1;
        threeclickCost = Math.round(threeclickCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("threeclickCost").innerHTML = twoclickCost;
        document.getElementById("clickthree").innerHTML = clicktwo;

        upgradeclick = function(){};

    }
} 

function addToScore(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"))
    if (typeof savedGame.score !== "undefined") score = savedGame.score; 
    if (typeof savedGame.clickingPower !== "undefined") clickingPower = savedGame.clickingPower;
    if (typeof savedGame.cursorCost !== "undefined") cursorCost = savedGame.cursorCost;
    if (typeof savedGame.cursors !== "undefined") cursors = savedGame.cursors;
    if (typeof savedGame.grandmas !== "undefined") grandmas = savedGame.grandmas;
    if (typeof savedGame.grandmaCost !== "undefined") grandmaCost = savedGame.grandmaCost;
    if (typeof savedGame.bakeries !== "undefined") bakeries = savedGame.bakeries;
    if (typeof savedGame.bakeryCost !== "undefined") bakeryCost = savedGame.bakeryCost;
    if (typeof savedGame.trees !== "undefined") trees = savedGame.trees;
    if (typeof savedGame.treeCost !== "undefined") treeCost = savedGame.treeCost;
    if (typeof savedGame.footballs !== "undefined") footballs = savedGame.footballs;
    if (typeof savedGame.footballCost !== "undefined") footballCost = savedGame.footballCost;
    if (typeof savedGame.twoclickCost !== "undefined") twoclickCost = savedGame.twoclickCost;
    if (typeof savedGame.clickthree !== "undefined") clicktwo = savedGame.clickthree;
    if (typeof savedGame.threeclickCost !== "undefined") clicktwo = savedGame.clickthree;
    if (typeof savedGame.factories !== "undefined") factories = savedGame.factories;
    if (typeof savedGame.factoryCost !== "undefined") factoryCost = savedGame.factoryCost;
}

function saveGame() {
    var gameSave = {
        score: score,
        clickingPower: clickingPower,
        cursorCost: cursorCost,
        cursors: cursors,
        grandmas: grandmas,
        grandmaCost: grandmaCost,
        bakeryCost: bakeryCost,
        bakeries: bakeries,
        trees: trees,
        treeCost: treeCost,
        footballs: footballs,
        footballCost: footballCost,
        twoclickCost: twoclickCost,
        clicktwo: clicktwo,
        threeclickCost: threeclickCost,
        clickthree: clickthree,
        factories: factories,
        factoryCost: factoryCost
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
    document.getElementById("bakeryCost").innerHTML = bakeryCost;
    document.getElementById("bakeries").innerHTML = bakeries;
    document.getElementById("trees").innerHTML = trees;
    document.getElementById("treeCost").innerHTML = treeCost;
    document.getElementById("footballs").innerHTML = footballs;
    document.getElementById("footballCost").innerHTML = footballCost;
    document.getElementById("twoclickCost").innerHTML = twoclickCost;
    document.getElementById("clicktwo").innerHTML = clicktwo;
    document.getElementById("clickthree").innerHTML = clickthree;
    document.getElementById("threeclickCost").innerHTML = threeclickCost;
    document.getElementById("factories").innerHTML = factories;
    document.getElementById("factoryCost").innerHTML = factoryCost;
};

setInterval(function() {
    saveGame();
    score = score + cursors;
    score = score + grandmas * 5;
    score = score + bakeries * 15;
    score = score + trees * 30;
    score = score + footballs * 35;
    score = score + factories * 100;
    document.getElementById("score").innerHTML = score;
    document.title = score + "$ - Clicking.ml";
}, 1000); 
