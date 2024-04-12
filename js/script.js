const carouselElem = document.querySelector(".my-carousel-images");
console.log(carouselElem);

const nextElem = document.querySelector("div .my-next");
console.log(nextElem);

const prevElem = document.querySelector("div .my-previous");
console.log(prevElem);

const thumbnailsElem = document.querySelector(".my-thumbnails");

const activeClass = "active";

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



let indexItem = 0;

// prendo la prima immagine e la prima thumbnail e aggiungo classe active
toggleClass(allCarouselItem[indexItem], activeClass);

toggleClass(allThumbnails[indexItem], activeClass);

nextElem.addEventListener("click", () => {
    toggleClass(allCarouselItem[indexItem], activeClass);
    toggleClass(allThumbnails[indexItem], activeClass);
    indexItem++;
    if(indexItem < allCarouselItem.length) {
        toggleClass(allCarouselItem[indexItem], activeClass);
        toggleClass(allThumbnails[indexItem], activeClass);
    } else {
        indexItem = 0;
        toggleClass(allCarouselItem[indexItem], activeClass);
        toggleClass(allThumbnails[indexItem], activeClass);
    }
});

prevElem.addEventListener("click", () => {
    toggleClass(allCarouselItem[indexItem], activeClass);
    toggleClass(allThumbnails[indexItem], activeClass);
    indexItem--;
    if(indexItem < 0) {
        indexItem = allCarouselItem.length - 1;
        toggleClass(allCarouselItem[indexItem], activeClass);
        toggleClass(allThumbnails[indexItem], activeClass);
    } else {
        toggleClass(allCarouselItem[indexItem], activeClass);
        toggleClass(allThumbnails[indexItem], activeClass);
    }
});

// aggiungo event listner a tutte i tuhmbnail
allThumbnails.forEach((curItem, index) => {
    curItem.addEventListener("click", () => {
        toggleClass(allThumbnails[indexItem], activeClass)
        toggleClass(allCarouselItem[indexItem], activeClass)

        indexItem = index;
        toggleClass(curItem, activeClass)
        toggleClass(allCarouselItem[index], activeClass)
        
    });
});