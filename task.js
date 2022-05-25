// Задание1 появление окна на сайте
const popUpWindow = document.getElementById('modal_main'); //определение модального окна
popUpWindow.className = 'modal modal_active'; // активация модального окна

// Задание2,3
const closing = Array.from(document.getElementsByClassName('modal__close')); // массив с элементами имеющими класс модальное закрытие
const modalSuccess = document.getElementById('modal_success'); //определение модального окна modal_success
const activeWindows = Array.from(document.getElementsByClassName('modal')); // массив с элементами у которых класс modal


closing.forEach((index) => { // итерация по массиву closing
    if (index.className.includes('show-success')){ // содержит ли элемент с классом show-success
        index.onclick = function() {
            popUpWindow.classList.remove('modal_active'); // удаление класса modal_active у предыдущего окна 
            modalSuccess.classList.add('modal_active');
        };
    } else {
        index.onclick = function() {
            activeWindows.forEach((i) => i.classList.remove('modal_active'));
        };
    };
});