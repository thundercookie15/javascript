var pics = document.getElementById("pics");

var speler1beurt = true;

var speler1score = 0;
var speler2score = 0;
var selectedPictures = [];

function createImage (i) {
    var picture = document.createElement("img");
    picture.src = "images/background.jpg";
    picture.className = "selection";
    picture.style.border = "3px solid black";
    picture.addEventListener("click", function () {
        picture.style.border = "3px red solid";
        picture.src = "images/aap" + i + ".jpg";
        if (selectedPictures.length < 2) {
            selectedPictures.push(picture);
        }
        if (selectedPictures.length == 2) {
            checkMatch();
            checkWin();
        }
    });
    pics.appendChild(picture);
}


function createMonkeyArray() {
    var aapNummer = 0;
    var mijnApen = [];

    while (mijnApen.length <= 17) {
        aapNummer = Math.floor((Math.random() *9)+1);
        if (occurencesInArray(mijnApen, aapNummer,2)) {
            mijnApen.push(aapNummer);
        }
    }
    return mijnApen;
}


function occurencesInArray(arr, str, i) {
    var occ = 0;
    if (arr.length == 0) {
        return true;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == str) {
                occ++;
            }
        }
        if (occ <2) {
            return true;
        } else {
            return false;
        }
    }
}

function checkMatch() {
    if (selectedPictures[0].src == selectedPictures[1].src) {
        if (speler1beurt) {
            speler1score++;
            document.getElementById("speler1").textContent = `Speler1: ${speler1score}`;
        } else {
            speler2score++;
            document.getElementById("speler2").textContent = `Speler2: ${speler2score}`;
        }
        selectedPictures = [];
    } else {
        if (speler1beurt) {
            document.getElementById("beurt").textContent = "Aan de beurt: Speler2";
            speler1beurt = false;
        } else {
            document.getElementById("beurt").textContent = "Aan de beurt: Speler1";
            speler1beurt = true;
        }
        setTimeout(clear,1000)
    }
}

function checkWin() {
    if (speler1score + speler2score == 9) {
        if (speler1score > speler2score) {
            document.getElementById("win").textContent = "Speler 1 heeft gewonnen."
        } else {
            document.getElementById("win").textContent = "Speler 2 heeft gewonnen."
        }
        document.getElementById("win").style.visibility = "unset"
    } else return;
}

function clear() {
    for (var i = 0; i < 2; i++) {
        selectedPictures[i].style.borderColor = "black";
        selectedPictures[i].src = "images/background.jpg";
    }
    selectedPictures = [];
}

var mijnApen = createMonkeyArray();

for (var i = 0; i < 18; i++) {
    createImage(mijnApen[i]);
}