const popUpWindow = document.getElementById('modal_main'); //определение модального окна

const closing = Array.from(document.getElementsByClassName('modal__close')); // массив с элементами имеющими класс модальное закрытие
const modalSuccess = document.getElementById('modal_success'); //определение модального окна modal_success
const activeWindows = Array.from(document.getElementsByClassName('modal')); // массив с элементами у которых класс modal

function getCookie() {
    const pairs = document.cookie.split('; ');
    pairs.find(p => {
        if(p === 'page=viewed') {
            deleteWindow();
        } else {
            popUpWindow.className = 'modal modal_active'; // активация модального окна

            closing.forEach((elem) => { // итерация по массиву closing
                if (elem.className.includes('show-success')){ // содержит ли элемент с классом show-success
                    elem.onclick = function() {
                        popUpWindow.classList.remove('modal_active'); // удаление класса modal_active у предыдущего окна 
                        modalSuccess.classList.add('modal_active');
                        const btnSuccess = document.querySelector('.btn_success'); // доступ к зеленой кнопке во втором модальном окне
                        btnSuccess.onclick = deleteWindow;
                    };
                } else {
                    elem.onclick = deleteWindow;
                };
            });
        }
    })
}

getCookie();

function deleteWindow() {
    activeWindows.forEach((i) => i.classList.remove('modal_active'));
    document.cookie = `page=${encodeURIComponent('viewed')}`;
}