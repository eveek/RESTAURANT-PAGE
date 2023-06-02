import renderHome from './home';
import renderMenu from './menu';
import renderHeader from './header';


initialisePage();

// console.log(homeBtn)
function ActiveBtn(btn) {
    const homeBtn = document.getElementById('home_btn');
    const menuBtn = document.getElementById('menu_btn');
    const contactBtn = document.getElementById('contact_btn');
    switch (btn) {
        case 'home':
            homeBtn.classList.add('active');
            menuBtn.classList.remove('active');
            contactBtn.classList.remove('active');
            break;
        case 'menu':
            menuBtn.classList.add('active');
            homeBtn.classList.remove('active');
            contactBtn.classList.remove('active');
            break;
        default:
            contactBtn.classList.add('active');
            menuBtn.classList.remove('active');
            homeBtn.classList.remove('active');
            break;
    }
}

function listener() {
    const main = document.querySelector('main');
    const homeBtn = document.getElementById('home_btn');
    const menuBtn = document.getElementById('menu_btn');
    const contactBtn = document.getElementById('contact_btn');

    homeBtn.addEventListener('click', () => {
        // main.innerHTML = '';
        ActiveBtn('home');
        renderHome();
        console.log('home');
    })
    menuBtn.addEventListener('click', () => {
        // main.innerHTML = '';
        ActiveBtn('menu');
        renderMenu();
        console.log('menu');
    })
    // homeBtn.addEventListener('click', () => {
    //     main.innerHTML = '';
    //     renderHome();
    // })
}


function initialisePage () {
    renderHeader();
    renderHome();
    ActiveBtn('home');
};
listener();