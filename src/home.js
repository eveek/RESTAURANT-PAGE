export default function renderHome() {
    const main = document.querySelector('main');
    const contentBox = document.getElementById('content');
    const section = document.createElement('section');
    section.id = 'home';
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Its not just <br> food, It\'s an <br> <span>Experience</span>.';
    const p = document.createElement('p');
    p.innerHTML = 'You cannot think well, love well, sleep well, <br> if you have not dined well.';
    const btn = document.createElement('button');
    btn.innerText = 'Order now';
    const homeBg = document.createElement('div');
    homeBg.id = 'home_bg_img';

    section.appendChild(h1);
    section.appendChild(p);
    section.appendChild(btn);
    section.appendChild(homeBg);

    main.innerHTML = '';
    main.appendChild(section);
}