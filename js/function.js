/**
 * Description : fa il toggle della classe all'elemento
 * @param {object} elemToEditClass elemento a cui fare toggle della classe
 * @param {string} classToToggle classe da controllare
 */
function toggleClass (elemToEditClass, classToToggle) {

    elemToEditClass.classList.toggle(classToToggle);

}