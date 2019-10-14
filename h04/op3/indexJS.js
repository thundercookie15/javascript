var aantal = [1,2,3,4,5];
var tellerneus = 0;
var tellerogen = 0;
var tellerkin = 0;

var kin = document.getElementById("kin");
var ogen = document.getElementById("ogen");
var neus = document.getElementById("neus");

kin.style.backgroundImage = "url('images/kin1.jpg')";
ogen.style.backgroundImage = "url('images/ogen1.jpg')";
neus.style.backgroundImage = "url('images/neus1.jpg')";

kin.addEventListener("click", function () {
    kin.style.backgroundImage = "url('images/kin" + kinPicker() + ".jpg')"
});

neus.addEventListener("click", function () {
    neus.style.backgroundImage = "url('images/neus" + neusPicker() + ".jpg')"
});

ogen.addEventListener("click", function () {
    ogen.style.backgroundImage = "url('images/ogen" + ogenPicker() + ".jpg')"
})

function kinPicker() {
    if (tellerkin >= aantal.length) {
        tellerkin = 1;
    } else {
        tellerkin++;
    }
    return tellerkin;
}

function ogenPicker() {
    if (tellerogen >= aantal.length) {
        tellerogen = 1;
    } else {
        tellerogen++;
    }
    return tellerogen;
}

function neusPicker() {
    if (tellerneus >= aantal.length) {
        tellerneus = 1;
    } else {
        tellerneus++;
    }
    return tellerneus;
}