document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelector(".tabs");
    const links = tabs.querySelectorAll(".tab-link");

    for (let el of links) {
        el.addEventListener("click", e => {
            e.preventDefault();
            //robie petle po linkach zakladek i usuwam im klasę
            links.forEach(el => el.parentElement.classList.remove("tab-el-active"));
            //dodaję ją do li w którym jest klikniety link
            el.parentElement.classList.add("tab-el-active");

            //za pomoca href pobieram element na ktory wskazuje dana zakladka
            const href = el.getAttribute("href");
            const targetDiv = document.querySelector(href);

            //pobieram tez wszystkie divy (braci) danego diva
            const divs = [...targetDiv.parentElement.children];

            //podobnie do zakladek usuwam im klasę active i dodaję do pobranego diva
            divs.forEach(el => el.classList.remove("tab-content-active"));
            targetDiv.classList.add("tab-content-active");
        })
    }

});