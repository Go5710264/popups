// Задание1 появление окна на сайте
const popUpWindow = document.getElementById('modal_main');
popUpWindow.className = 'modal modal_active';

// Задание2,3
let closing = Array.from(document.getElementsByClassName('modal__close'));

closing.forEach((index) => {
    if (index.className.includes('show-success')){
        let modalSuccess = document.getElementById('modal_success');
        index.onclick = function() {
            modalSuccess.classList.add('modal_active');
        };
    } else {
        let activeWindows = Array.from(document.getElementsByClassName('modal'));
        index.onclick = function() {
            activeWindows.forEach((i) => i.classList.remove('modal_active'));
        };
    };
});