currentSlideOrder = 1;
productList = [0, 0, 0, 0]

function changeImg() {
    let carousel = document.getElementById("carousel");
    carousel.src = "img/product_" + currentSlideOrder + ".jpg";
}

function nextImg() {
    if (currentSlideOrder == 4) {
        currentSlideOrder = 1;
    } else if (currentSlideOrder >= 1) {
        currentSlideOrder++;
    }
    changeImg();
}

function prevImg() {
    if (currentSlideOrder == 1) {
        currentSlideOrder = 4;
    } else if (currentSlideOrder <= 4) {
        currentSlideOrder--;
    }
    changeImg();
}

function updateItems() {
    document.getElementById('item-0-counter').innerHTML = productList[0];
    document.getElementById('item-1-counter').innerHTML = productList[1];
    document.getElementById('item-2-counter').innerHTML = productList[2];
    document.getElementById('item-3-counter').innerHTML = productList[3];
}

function increaseItem(productId) {
    productList[productId] += 1;
    updateItems()
}

function decreaseItem(productId) {
    if (productList[productId] != 0) {
        productList[productId] -= 1;
        updateItems()
    }
}