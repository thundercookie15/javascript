pics = document.getElementById("pics");
createPictureHolders();
createAapPics();

function createPictureHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolders = document.createElement("div");
        pictureHolders.className = "picture-holder";
        pictureHolders.id = "picture-holder-" + i;
        pics.appendChild(pictureHolders);
    }
}

function createAapPics() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        aapPlaatje = document.createElement("img");
        aapPlaatje.src = "images/aap" + (i + 1) + ".jpg";
        aapPlaatje.id = (i+1);
        aapPlaatje.addEventListener("click", function () {
            maakFavoriet(this.id)
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(aapPlaatje);
    }
}

function maakFavoriet(id) {
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('images/heart.png')";
}
