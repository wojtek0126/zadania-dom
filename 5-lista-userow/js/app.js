function newElement(tag, attributes) {
    const element = document.createElement(tag);
    for (attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}

function deleteAddedUser(button, childToTrash) {
    button.addEventListener('click', function () {
        childToTrash.parentElement.removeChild(childToTrash);
    })
}

function deleteUsersOnButton(buttons, childrenToDelete) {
    buttons.forEach(function (e) {
        let i = 0;
        e.addEventListener('click', function () {
            childrenToDelete[i].parentElement.removeChild(childrenToDelete[i]);
            if (childrenToDelete[i].parentElement === null){
                i++;
            }
        })
    })
}

const $form = document.querySelector('.form');
const $userList = document.querySelector('.user-list');
const $users = document.querySelectorAll('.user');
const $nameField = document.querySelector('#name');
const $phoneField = document.querySelector('#phone');
const $deleteUserButtons = document.querySelectorAll('.user-delete');

function AddingUserEnabled() {
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
        deleteAddedUser(deleteUserButton, newUserField);
    })
}

AddingUserEnabled();
deleteUsersOnButton($deleteUserButtons, $users);

