//document.querySelector shortcut
const getElement = (attrValue) => {
    return document.querySelector(attrValue);
}

const $form = getElement('.form');
const $userList = getElement('.user-list');
const $nameField = getElement('#name');
const $phoneField = getElement('#phone');

const newElement = (tag, attributes) => {
    const element = document.createElement(tag);
    for (attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}

const deleteUserEnabled = (userList, classOfDeleteButton) => {
    userList.addEventListener('click', function (e) {
        const target = e.target
        if (target.className == classOfDeleteButton ) {
            const li = target.parentElement;
            userList.removeChild(li);
        }
    })
}

const AddingUserEnabled = () => {
    $form.addEventListener('submit', function (e) {
        e.preventDefault();

const newUserField = newElement('li', {class: 'user'});
const newUserDetails = newElement('div', {class: 'user-data'});
const newUserName = newElement('div', {class: 'user-name'});
const newUserPhone = newElement('div', {class: 'user-phone'});
const deleteUserButton = newElement('button', {class: 'btn user-delete'});
        newUserName.innerText = $nameField.value;
        newUserPhone.innerText = $phoneField.value;
        $userList.appendChild(newUserField);
        newUserField.appendChild(newUserDetails);
        newUserDetails.appendChild(newUserName);
        newUserDetails.appendChild(newUserPhone);
        newUserField.appendChild(deleteUserButton);
    })
}

AddingUserEnabled();
deleteUserEnabled($userList, 'btn user-delete');



