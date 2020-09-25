const $option = document.getElementsByClassName('tab-el');
const $content = document.getElementsByClassName('tab-content');

function toggleOnClick(element_to_click,  element_to_toggle, list_of_elements, class_name) {
    element_to_click.addEventListener('click', function (e) {
        e.preventDefault();
        for(i = 0;i < list_of_elements.length;i++){
            if (list_of_elements[i].classList.contains(class_name)){
                list_of_elements[i].classList.remove(class_name);
            }
        }
        element_to_toggle.classList.toggle(class_name);
    })
}

for (i = 0;i <$option.length;i++) {
    toggleOnClick($option[i], $option[i], $option,'tab-el-active');
}

for (i = 0;i <$content.length;i++) {
    toggleOnClick($option[i], $content[i], $content,'tab-content-active');
}

