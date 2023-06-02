export default function renderHeader() {
    const contentBox = document.getElementById('content');
    const head = document.createElement('header');
    const nav = document.createElement('nav');
    const logo = document.createElement('img');
    logo.src = './IMAGES/burger_logo.png';
    logo.alt = 'Brand logo';
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const btn1 = document.createElement('button');
    btn1.innerText = 'Home';
    btn1.id = 'home_btn';
    li1.appendChild(btn1);
    const li2 = document.createElement('li');
    const btn2 = document.createElement('button');
    btn2.innerText = 'Menu';
    btn2.id = 'menu_btn';
    li2.appendChild(btn2);
    const li3 = document.createElement('li');
    const btn3 = document.createElement('button');
    btn3.innerText = 'Contact';
    btn3.id = 'contact_btn';
    li3.appendChild(btn3);

    const main = document.createElement('main');

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    nav.appendChild(logo);
    nav.appendChild(ul);
    head.appendChild(nav);

    contentBox.appendChild(head);
    contentBox.appendChild(main);
}