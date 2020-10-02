
const getElement = (attrValue) => {
    return document.querySelector(attrValue);
}

const getElementById = (attrValue) => {
    return document.getElementById(attrValue);
}

const getAAll = (attrValue) => {
    return document.querySelectorAll(attrValue);
}

const newElement = (tag, attributes) => {
    const element = document.createElement(tag);
    for (attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}



const addBtn = getElementById('add');
const list = getElement('.list');
const element = getElement('.element');
const elementNumber = getElement('.nr');
const cloneBtn = getElement('.clone');

let i = parseFloat(elementNumber.innerText);

const addElementEnabled = () => {
    addBtn.addEventListener('click', function () {
        const btn = addBtn;
        btn.style.background = 'gold';
        setTimeout(function () {
            btn.style.background = '#3689DB';
        }, 100);
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
        i++;
    })
}

const deleteElemEnabled = (userList, classOfDeleteButton) => {
    userList.addEventListener('click', function (e) {
        const elements = getAAll('.element');
        const target = e.target;
        if (target.className == classOfDeleteButton ) {
            const li = target.parentElement;
            userList.removeChild(li);        }
        if(elements.length < 2) {
            i = 0;
        }
    })
}

const cloneElementEnabled = (userList, classOfCloneButton) => {
    userList.addEventListener('click', function (e) {
        const target = e.target;
        if (target.className == classOfCloneButton ) {
            const clone = target.parentElement.cloneNode(true);
            userList.appendChild(clone);
        }
    })
}

addElementEnabled();
deleteElemEnabled(list, 'delete');
cloneElementEnabled(list, 'clone');


