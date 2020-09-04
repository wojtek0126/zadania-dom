document.addEventListener('DOMContentLoaded', () => {

    const list = document.querySelector(".user-list");
    const form = document.querySelector(".form");
    const inputName = document.querySelector("#name");
    const inputPhone = document.querySelector("#phone");

    form.addEventListener("submit", e => {
        e.preventDefault();

        const name = inputName.value;
        const phone = inputPhone.value;

        //tworzę nowy element, wypełniam go html i wrzucam do listy
        const li = document.createElement("li");
        li.classList.add("user");
        li.innerHTML = `
            <div class="user-data">
                <div class="user-name">${name}</div>
                <div class="user-phone">${phone}</div>
            </div>
            <button type="button" class="btn user-delete">
                Usuń
            </button>
        `;

        list.append(li);
    });

    //podpinam zdazenie dla usuwania userów
    //nie podpinam się bezpośrednio pod przyciski,
    //ponieważ mogą dojść nowi uzytkownicy http://kursjs.pl/kurs/events/events.php#dynamic-elements
    list.addEventListener("click", e => {
        if (e.target.classList.contains("user-delete")) {
            e.target.closest(".user").remove();
        }
    })

});