const $firstAttempt = document.querySelectorAll('.first-attempt');
const $dataBorder = document.querySelectorAll('[data-border]');
const $hack = document.querySelectorAll('.hack');
const $hijack = document.querySelectorAll('.hijack');
const $st = document.getElementsByClassName('st1 st2');
const $del = document.querySelectorAll('.del');
const $lastAttempt = document.querySelectorAll('.last-attempt > span');


function addAndSetAttributeForArrayOfElements(elements, attribute, value) {
    for (i = 0;i < elements.length;i++) {
        elements[i].setAttribute(attribute, value);
    }
}

function removeAttributeForArrayOfElements(elements, attribute) {
    for (i = 0;i < elements.length;i++) {
        elements[i].removeAttribute(attribute);
    }
}

function addClassForArrayOfElements(elements, value) {
    elements.forEach(function (e) {
        e.classList.add(value);
    })
}

function addAndSetNewColorAndFontSizeForArrayOfElements(elements, newColor, newFontSize) {
    for (i = 0;i < elements.length;i++) {
        elements[i].style.color = newColor;
        elements[i].style.fontSize = newFontSize;
    }
}

function showOrHideElementsForArrayOfElements(elements, hidden_or_visible) {
    for (i = 0;i < elements.length;i++) {
        $lastAttempt[i].style.visibility = hidden_or_visible;
    }
}


addClassForArrayOfElements($firstAttempt,'active');
addAndSetAttributeForArrayOfElements($dataBorder, 'data-el-active', '');
addAndSetAttributeForArrayOfElements($hack, 'title', 'hacking');
removeAttributeForArrayOfElements($hijack, 'title');
addAndSetNewColorAndFontSizeForArrayOfElements($st, 'red', '15px');
removeAttributeForArrayOfElements($del, `data-hack-inactive`);
addAndSetAttributeForArrayOfElements($del, `data-hack-active`, '' );
showOrHideElementsForArrayOfElements($lastAttempt, "hidden");
