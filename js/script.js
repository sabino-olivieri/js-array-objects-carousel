const carouselElem = document.querySelector(".my-carousel-images");
console.log(carouselElem);



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

    carouselElem.append(itemElem);
});

const allCarouselItem = document.querySelectorAll(".my-carousel-item");
console.log(allCarouselItem);

let indexItem = 0;

allCarouselItem[indexItem].classList.add("active");