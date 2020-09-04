document.addEventListener('DOMContentLoaded', () => {

    const addBtn = document.querySelector("#add");
    const list = document.querySelector(".list");

    addBtn.addEventListener("click", e => {
        const count = list.querySelectorAll(".element").length;
        const newEl = document.createElement("div");
        newEl.innerHTML = `
        <div class="element">
            <h3 class="element-title">Element numer <span class="nr">${count + 1}</span></h3>
            <button class="clone">Clone</button>
            <button class="delete">Delete</button>
        </div>
        `;
        list.append(newEl);
    })

    list.addEventListener("click", e => {
        if (e.target.classList.contains("delete")) {
            e.target.closest(".element").remove();
        }

        if (e.target.classList.contains("clone")) {
            const clone = e.target.closest(".element").cloneNode(true);
            list.append(clone);
        }
    })

});