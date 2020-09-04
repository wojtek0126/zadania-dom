document.addEventListener('DOMContentLoaded', () => {

    // <a
    //     href="http://www.poznan.pl/"
    //     class="map-marker"
    //     data-name="Poznań"
    //     data-population="542689"
    //     style="left: 180px; top: 270px;"
    // >Poznań</a>

    // {
    //     name : "Warszawa",
    //     population : 1735000,
    //     map_x: 460,
    //     map_y : 260,
    //     href: "http://www.warszawa.pl/"
    // },

    const map = document.querySelector(".map");

    //<div class="map-tooltip" style="left: -9999px; top: -9999px"></div>
    const tooltip = document.createElement("div");
    tooltip.classList.add("map-tooltip");
    tooltip.style.left = "-9999px";
    tooltip.style.top = "-9999px";
    document.body.append(tooltip);

    for (let city of cities) {
        const a = document.createElement("a");
        a.setAttribute("href", city.href);
        a.classList.add("map-marker");
        a.dataset.name = city.name;
        a.dataset.population = city.population;
        a.style.left = city.map_x + "px";
        a.style.top = city.map_y + "px";
        a.innerText = city.name;

        map.append(a);

        a.addEventListener("mouseover", e => {
            tooltip.innerHTML = `
                <h2>${a.dataset.name}</h2>
                <div>Population: <strong>${a.dataset.population}</strong></div>
            `;
            tooltip.style.left = e.pageX + 30 + "px";
            tooltip.style.top = e.pageY + 30 + "px";
        })
        a.addEventListener("mousemove", e => {
            tooltip.style.left = e.pageX + 30 + "px";
            tooltip.style.top = e.pageY + 30 + "px";
        })
        a.addEventListener("mouseout", e => {
            tooltip.style.left = "-9999px";
            tooltip.style.top = "-9999px";
            tooltip.innerHTML = "";
        })
    }

});