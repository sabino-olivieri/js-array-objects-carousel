/**
 * Description : fa il toggle della classe all'elemento
 * @param {object} elemToEditClass elemento a cui fare toggle della classe
 * @param {string} classToToggle classe da controllare
 */
function toggleClass (elemToEditClass, classToToggle) {

    elemToEditClass.classList.toggle(classToToggle);

}

/**
 * Description avvia lo scroll automatico delle immagini in senso orario
 */
function scrollImage() {
    clearInterval(time);
    clearInterval(timeReverse);
    scrollActive = true;

    time = setInterval(() => {
        nextScroll();
    }, 3000);
}

/**
 * Description avanza lo sorrimento delle immagini di uno
 */
function nextScroll () {
    toggleCaruselThumbnails();
    indexItem++;

    if (indexItem > allCarouselItem.length - 1) {
        indexItem = 0;
    }

    toggleCaruselThumbnails();
}

/**
 * Description torna indietro di una immagine
 */
function prevScroll () {
    toggleCaruselThumbnails();
    indexItem--;

    if (indexItem < 0) {
        indexItem = allCarouselItem.length - 1;
    }

    toggleCaruselThumbnails();
}

/**
 * Description fa il toggle della classe active sul carosello e sui thumbnails
 */
function toggleCaruselThumbnails() {
    toggleClass(allCarouselItem[indexItem], activeClass);
    toggleClass(allThumbnails[indexItem], activeClass);
} 