document.addEventListener('DOMContentLoaded', () => {

    // ## Zadanie 1
    // Po kliknięciu na LI przełącz klasę `.nav-el-active` z obecnie zaznaczonego elementu na element kliknięty.

    // Zwróć uwagę, że klasa `.nav-el-active` jest nadawana na element LI a nie na A. Postaraj się sprawić, by podczas takiego kliku strona nie była przeładowywana.

    // <ul class="nav">
    //     <li class="nav-el nav-el-active">
    //         <a href="" class="nav-link">Strona główna</a>
    //     </li>

    const links = document.querySelectorAll(".nav-link");

    for (let el of links) {
        el.addEventListener("click", e => {
            e.preventDefault();
            //robię pętlę po linkach
            //dla każdego linka jego rodzicowi (li) usuwam klasę active
            links.forEach(el => el.parentElement.classList.remove("nav-el-active"));
            //dodaję ją tylko do rodzica klikniętego linka
            el.parentElement.classList.add("nav-el-active");
        })
    }

});