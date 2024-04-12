const carouselElem = document.querySelector(".my-carousel-images");
console.log(carouselElem);

const nextElem = document.querySelector("div .my-next");
console.log(nextElem);

const prevElem = document.querySelector("div .my-previous");
console.log(prevElem);

const thumbnailsElem = document.querySelector(".my-thumbnails");

const orderBtnElem = document.getElementById("my-order-button");

const stopBtnElem = document.getElementById("my-stop-button");

const activeClass = "active";

let indexItem = 0;

// variabili per controllare i setInterval
let time;
let timeReverse;

// flag per verificare se è attivo uno scroll
let scrollActive = true;
let scrollActiveReverse = false;

scrollImage();

// inserisco immagini nel DOM
images.forEach((curElem) => {
    const itemElem = document.createElement("div");
    itemElem.classList.add("my-carousel-item");

    itemElem.innerHTML = `
        <img class="img-fluid" src="./${curElem.image}" alt="${curElem.title} picture"/>
        <div class="item-description px-3">
            <h2>${curElem.title}</h2>
            <p>
            ${curElem.text}
            </p>
        </div>
    `
    console.log(itemElem);

    const thumbnails = document.createElement("img");
    thumbnails.classList.add("img-fluid", "my-thumbnail");
    thumbnails.src = `./${curElem.image}`
    thumbnails.alt = `${curElem.title} picture`

    carouselElem.append(itemElem);
    thumbnailsElem.append(thumbnails);

});


// prendo tutte le immagini che ho inserito
const allCarouselItem = document.querySelectorAll(".my-carousel-item");
console.log(allCarouselItem);

// prendo tutti i thumbnail
const allThumbnails = document.querySelectorAll("img.my-thumbnail")
console.log(allThumbnails);

// prendo la prima immagine e la prima thumbnail e aggiungo classe active
toggleCaruselThumbnails();

nextElem.addEventListener("click", () => {
    nextScroll();
});

prevElem.addEventListener("click", () => {
    prevScroll();
});

// aggiungo event listner a tutte i tuhmbnail
allThumbnails.forEach((curItem, index) => {
    curItem.addEventListener("click", () => {
        toggleCaruselThumbnails()

        indexItem = index;
        toggleClass(curItem, activeClass)
        toggleClass(allCarouselItem[index], activeClass)

    });
});

orderBtnElem.addEventListener("click", () => {

    if (!scrollActiveReverse) {
        clearInterval(time);

        scrollActive = false;
        scrollActiveReverse = true;

        timeReverse = setInterval(() => {
            prevScroll()
        }, 3000);
    }
});

stopBtnElem.addEventListener("click", () => {
    if (scrollActive || scrollActiveReverse) {
        clearInterval(time);
        clearInterval(timeReverse);
        scrollActive = false;
        scrollActiveReverse = false;
    } else {
        scrollImage();
    }
});