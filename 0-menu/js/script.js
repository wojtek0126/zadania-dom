const $thirdElementMenuLi = document.getElementById('active');
const $allLinks = document.querySelectorAll('a');
const $allExceptThird = document.querySelectorAll('li > a:not(#active)');
console.log($allExceptThird);

function print(text) {
    alert('Kliknięto ' + text);
}

$thirdElementMenuLi.style.color = '#fff';

let i = 0;
while (i < $allLinks.length) {
    $allLinks[i].setAttribute('href', '#');
    i++;
}

let j = 0;
while (j < $allExceptThird.length) {
    let innerText = $allExceptThird[j].innerText;
    $allExceptThird[j].addEventListener('click', function () {
        print(innerText);
    })
    j++;
}

