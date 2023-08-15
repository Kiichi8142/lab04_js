currentSlideOrder = 1;

function changeImg() {
    let carousel = document.getElementById("carousel");
    carousel.src = "img/product_" + currentSlideOrder + ".jpg";
}

function nextImg() {
    if (currentSlideOrder >= 1 && currentSlideOrder < 4) {
        currentSlideOrder++;
        changeImg();
    }
}

function prevImg() {
    if (currentSlideOrder > 1 && currentSlideOrder <= 4) {
        currentSlideOrder--;
        changeImg();
    }
}