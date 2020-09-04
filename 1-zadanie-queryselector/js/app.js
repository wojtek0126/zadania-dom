// ## Zadanie 1
// Rozwiązując kolejne punkty powinieneś z planszy usuwać kwadraty z danym numerem.
// Jeżeli dane kwadraty nie zostały usunięte, znaczy że polecenie nie zostało dobrze wykonane.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Znajdź elementy o klasie `.first-attempt` - dodaj im klasę `.active`
    {
        const elem = document.querySelectorAll(".first-attempt");
        elem.forEach(el => el.classList.add("active"));
    }

    // 2. Znajdź elementy z atrybutem `data-border` i dodaj im atrybut `data-el-active`. Wykorzystaj dataset i inny rodzaj pętli niż w 1 zadaniu
    {
        const elem = document.querySelectorAll("[data-border]");
        for (let el of elem) {
            el.dataset.elActive = true;
        }
    }

    // 3. Znajdź elementy z klasą `.hack`. Dodaj im atrybut title ustawiony na wartość "hacking". Atrybut ten nie powinien zaczynać się od `data-`
    {
        const elem = document.querySelectorAll(".hack");
        elem.forEach(el => el.setAttribute("title", "hacking"));
    }

    // 4. Znajdź elementy o klasie `.hijack`. Usuń im atrybut `title`
    {
        const elem = document.querySelectorAll(".hijack");
        elem.forEach(el => el.removeAttribute("title"));
    }

    // 5. Znajdź elementy które mają 2 klasy równocześnie: `.st1` i `.st2`. Dodaj im style: `color: red`, i `font-size na 15px`
    {
        const elem = document.querySelectorAll(".st1.st2");
        for (let el of elem) {
            el.style.color = "red";
            el.style.fontSize = "15px";
        }
    }

    // 6. Znajdź elementy które mają klasę `.del` ale nie mają klasy `.hijack`. Dodaj im atrybut `data-hack-active`, usuń atrybut `data-hack-inactive`
    {
        const elem = document.querySelectorAll(".del:not(.hijack)");
        elem.forEach(el => {
            el.dataset.hackActive = true
            delete el.dataset.hackInactive;
            //lub
            //el.removeAttribute("data-hack-inactive");
        });

    }

    // 7. Znajdź elementy o klasie `.last-attempt` i ukryj (nie usuwaj) w ich wnętrzu spany
    {
        const elem = document.querySelectorAll(".last-attempt");
        for (let el of elem) {
            const span = el.querySelector("span");
            span.style.display = "none";
        }
    }


});