let display = document.getElementById("display");

function addToDisplay(value) {
    var display = document.getElementById("display");
    if (display) {
        display.value += value;
    } else {
        console.error("Elemento 'display' não encontrado.");
    }
}

function clearDisplay() {
    display.value = "";
}

function showExtras() {
    var img = document.getElementById("extraImage");
    img.style.opacity = 0;
    img.style.display = "block";
    var fadeEffect = setInterval(function () {
        if (!img.style.opacity) {
            img.style.opacity = 0;
        }
        if (img.style.opacity < 1) {
            img.style.opacity = parseFloat(img.style.opacity) + 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);

    var audio = document.getElementById("audio");
    audio.currentTime = 10;
    audio.volume = 0.5;
    audio.play();
}
