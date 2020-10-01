// Po kliknięciu w "dodaj element" do listy dodaj nowy element podobny do tego już istniejącego na liście
//
// Po dodaniu powinien mieć kolejny numer który wylicz na podstawie ilości elementów + 1
//
// Po kliknięciu w ikonę kosza usuń dany element
// Po kliknięciu w ikonę klonowania sklonuj na koniec listy dany element

function print(element) {
    console.log(element);
}

function getElement(attrValue) {
    return document.querySelector(attrValue);
}

function getElementById(attrValue) {
    return document.getElementById(attrValue);

}

function getAAll(attrValue) {
    return document.querySelectorAll(attrValue);
}

function newElement(tag, attributes) {
    const element = document.createElement(tag);
    for (attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}


const addBtn = getElementById('add');
print(addBtn);
const list = getElement('.list');
print(list);
const element = getElement('.element');
print(element);
const elementTitle = getElement('.element-title');
print(elementTitle);
const elementNumber = getElement('.nr');
print(elementNumber);
const trash = getElement('.delete');
print(trash);
const clone = getElement('.clone');
print(clone);
const elements = getAAll('.element');
print(elements);

let i = parseFloat(elementNumber.innerText);
print(i);


addBtn.addEventListener('click', function () {
    const newEl = newElement('div', {class: 'element'});
    const newElText = newElement('h3', {class: 'element-title'});
    const newElNumber = newElement('span', {class: 'nr'});
    const newElCloneBtn = newElement('button', {class: 'clone'});
    const newElTrashBtn = newElement('button', {class: 'delete'});
    newElText.innerText = 'Element numer';
    newElNumber.innerText =` ${i+1}`;
    list.appendChild(newEl);
    newEl.appendChild(newElText);
    newElText.appendChild(newElNumber);
    newEl.appendChild(newElCloneBtn);
    newEl.appendChild(newElTrashBtn);
    print('clicked');
    i++;
})

const deleteElemEnabled = (userList, classOfDeleteButton) => {
    userList.addEventListener('click', function (e) {
        const elements = getAAll('.element');
        print(elements);
        const target = e.target;
        if (target.className == classOfDeleteButton ) {
            const li = target.parentElement;
            userList.removeChild(li);
        }
        if(elements.length < 2) {
            i = 0;
        }
    })
}

deleteElemEnabled(list, 'delete');


