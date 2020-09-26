// Po kliknięciu na przycisk przy samochodzie:
//     - pokaż element `.car-detail` dla danego samochodu.
// - zmień tekst na przycisku na "schowaj detale".
// - dodaj klasę `.car-show-detail` do danego samochodu (elementu `.car`)
//
// Po ponownym kliknięciu na przycisk
// - Przywróć początkowy tekst na przycisku (pokaż detale)
// - schowaj `.car-detail` danego samochodu
// - usuń klasę `.car-show-detail` z danego samochodu

// <div class="car-detail" style="display:none">
// <button type="button" class="car-toggle-detail">
const $buttons = document.getElementsByClassName('car-toggle-detail');
const $hiddenContent = document.getElementsByClassName('car-detail');
const $car = document.getElementsByClassName('car');

function toggleShowOnClick(elementToClick, listOfElementsToToggle, listOfElementsToToggleClass) {
    for (let i = 0; i < elementToClick.length; i++) {
        elementToClick[i].addEventListener('click', function (e) {
            e.preventDefault();
            if (listOfElementsToToggle[i].style.display === "" || listOfElementsToToggle[i].style.display === "none") {
                listOfElementsToToggle[i].style.display ="block";
                elementToClick[i].innerHTML = "schowaj detale"
                listOfElementsToToggleClass[i].classList.toggle('car-show-detail');
            }
            else {
                listOfElementsToToggle[i].style.display = "none";
                elementToClick[i].innerHTML = "pokaż detale"
                listOfElementsToToggleClass[i].classList.toggle('car-show-detail');
            }
        });
    }
}

toggleShowOnClick($buttons, $hiddenContent, $car);

