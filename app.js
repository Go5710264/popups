const popUpWindow = document.getElementById('modal_main');

const closing = Array.from(document.getElementsByClassName('modal__close')); 
const modalSuccess = document.getElementById('modal_success'); 
const activeWindows = Array.from(document.getElementsByClassName('modal')); 

function getCookie() {
    const pairs = document.cookie.split('; ');
    pairs.find(p => {
        if(p === 'page=viewed') {
            deleteWindow();
        } else {
            popUpWindow.className = 'modal modal_active'; 

            closing.forEach((elem) => { 
                if (elem.className.includes('show-success')){ 
                    elem.onclick = function() {
                        popUpWindow.classList.remove('modal_active'); 
                        modalSuccess.classList.add('modal_active');
                        const btnSuccess = document.querySelector('.btn_success'); 
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