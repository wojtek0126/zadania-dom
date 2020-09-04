document.addEventListener('DOMContentLoaded', () => {

    const nav = document.querySelector(".nav");
    const links = nav.querySelectorAll(".nav-link");

    for (let el of links) {
        el.addEventListener("click", e => {
            e.preventDefault();

            links.forEach(el => el.parentElement.classList.remove("nav-el-active"));
            el.parentElement.classList.add("nav-el-active");

            const href = el.getAttribute("href");
            const target = document.querySelector(href);

            target.scrollIntoView({
                behavior: "smooth"
            })
        })
    }

});