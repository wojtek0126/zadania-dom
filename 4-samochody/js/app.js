document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll(".car-toggle-detail");

    for (let btn of buttons) {
        btn.addEventListener("click", e => {
            const carDiv = btn.closest(".car");
            const carDetail = carDiv.querySelector(".car-detail");

            carDiv.classList.toggle("car-show-detail");

            if (carDiv.classList.contains("car-show-detail")) {
                carDetail.style.display = "block"; //pokazuję
                btn.innerText = "schowaj detale";
            } else {
                carDetail.style.display = ""; //ukrywam
                btn.innerText = "pokaż detale";
            }
        })
    }

});