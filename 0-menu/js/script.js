// 1. Dodaj mu klasę .menu
// 2. pierwszemu LI w tym ul dodaj klasę `.first`
// 3. ostatniemu LI w tym ul dodaj klasę `.last`
// 4. trzeciemu LI w tym ul ustaw klasę `.active`
// 5. trzeciemu LI w tym ul ustaw za pomocą JS kolor tekstu na `#fff`
// 6. każdemu linkowi w tym menu ustaw atrybut `title="Przejdź na stronę ..."` gdzie ... to tekst danego linka
// 7. za pomocą JS każdemu linkowi w tym ul ustaw atrybut href na #. Po co to robimy? Czy jest alternatywna metoda?
// 8. Dodaj do każdego linka w ul zdarzenie CLICK. Po kliknięciu powinien pojawić się alert z tekstem, który widnieje na linku (np "Kliknięto Start")
// 9. Dla linka w `li.active` usuń zdarzenie click (tak by nie pojawiał sie alert po kliknięciu)

document.addEventListener('DOMContentLoaded', () => {

    function showText(e) {
        e.preventDefault();
        alert("Kliknięto " + e.target.innerText);
    }

    const menu = document.querySelector("ul");
    const li = menu.querySelectorAll("li");
    const links = menu.querySelectorAll("a");

    menu.classList.add("menu");

    li[0].classList.add("first");
    //menu.firstElementChild.classList.add("first");
    li[li.length-1].classList.add("last");
    //menu.lastElementChild.classList.add("first");
    li[2].classList.add("active");
    li[2].style.color = "#fff";

    for (let el of li) {
        el.setAttribute("title", "Przejdź na stronę " + el.innerText);
    }
    for (let a of links) {
        a.setAttribute("href", "#");
        a.addEventListener("click", showText);
    }

    menu.querySelector("li.active a").removeEventListener("click", showText);

});