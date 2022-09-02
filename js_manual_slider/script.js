let img = ["./pic/ak.jpg","./pic/ak-2.jpg","./pic/ak-3.jpg"],
    move = document.getElementById("manual"), i = 0;
document.getElementById("next").addEventListener("click", cal)

function cal() {

    i++;
    if (i <= img.length) {
        if (i == img.length) {
            i = 0;
        }
        move.src = img[i];
    }
}

document.getElementById("prev").addEventListener("click", prev);
function prev() {
    i--;
    if (i <= img.length) {
        if (i == -1) {
            i = 2;
        }
        move.src = img[i];
    }
}

