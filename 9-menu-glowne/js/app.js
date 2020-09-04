// ## Zadanie 1
// 1) pobierz ze strony element `#menu` i dodaj do niego klasę `.menu`
// 2) Pobierz z tego menu wszystkie elementy A i LI
// 3) Po wjechaniu kursorem na każde LI dodaj temu LI klasę `.active`, a wszystkim pozostałym LI usuń klasę `.active`
// 4) Po kliknięciu na każdy link w menu zrób następujące czynności:
//     - zatrzymaj domyślną akcję
//     - wszystkim LI poza tym w którym znajduje się kliknięty link dodaj klasę `.collased`
//     - rodzicowi klikniętego linka (LI) dodaj klasę `.expand`
//     - rodzicowi klikniętego linka dodaj event "transitionend", w którym podepniesz funkcję przez nazwę (nie anonimową). Funkcja ta może się dla przykładu nazywać expandElementTransitionEnd.

//     W funkcji tej:
//     - usuń event transitionend który właśnie dodałeś
//     - wypisz w konsoli href linka w tym LI (alternatywnie użyj `location.href = pobranyHref`)
// 5) Dodatkowe dla chętnych:
//     W powyższej funkcji którą podpiąłeś pod zdarzenie transitionend:
//     - stwórz dodatkowo nowy element który jest buttononem z klasą `.close` i tekstem Zamknij
//     - element ten dodaj do tego LI

//     Po kliknięciu na `.close` rodzicowi usuń klasę `.expand`
//     Wszystkim LI usuń klasę `.collapsed`
//     Usuń kliknięty przycisk `.close`

document.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector("#menu");
    menu.classList.add("menu");

    const links = menu.querySelectorAll("a");
    const li = menu.querySelectorAll("li");

    function expandElementTransitionEnd(e) {
        this.removeEventListener("transitionend", expandElementTransitionEnd);
        const href = this.querySelector("a").getAttribute("href");
        const button = document.createElement("button");

        button.innerText = "Zamknij";
        button.classList.add("close");
        button.addEventListener("click", e => {
            li.forEach(el => {
                el.classList.remove("collapsed", "expand")
            });
            button.remove();
        })
        this.append(button);
    }

    for (let el of li) {
        el.addEventListener("mouseover", e => {
            li.forEach(el => el.classList.remove("active"));
            el.classList.add("active");
        });
        el.addEventListener("click", e => {
            e.preventDefault();
            li.forEach(el => {
                el.classList.remove("expand")
                el.classList.add("collapsed")
            });
            el.classList.remove("collapsed");
            el.classList.add("expand");
            el.parentElement.addEventListener("transitionend", expandElementTransitionEnd)
        });
    }

});