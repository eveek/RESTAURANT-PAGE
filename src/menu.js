export default function renderMenu() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.id = 'menu';
    const h1 = document.createElement('h1');
    h1.innerText = "Menu";
    const menu_box = document.createElement('div');
    menu_box.id = 'menu_box';
    const menuBg = document.createElement('div');
    menuBg.id = 'menu_bg_img';
    const no_menu = 4;
    for (let i = 0; i < no_menu; i++) {
        const menu_item = document.createElement('div');
        const picture = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const button = document.createElement('button');

        menu_item.className = 'menu_items';
        button.innerText = 'Order';
        picture.className = 'picture';

        p1.innerText = 'Pizza';
        p2.innerText = "Price: $25";

        // if (i = 1) {
        //     p1.innerText = 'Burger';
        //     p2.innerText = "Price: $15";
        // } else if (i = 3) {
        //     p1.innerText = 'Burger';
        //     p2.innerText = "Price: $15";
        // } else {
        //     p1.innerText = 'Pizza';
        //     p2.innerText = "Price: $25";
        // }
        
        menu_item.appendChild(picture);
        menu_item.appendChild(p1);
        menu_item.appendChild(p2);
        menu_item.appendChild(button);
        menu_box.appendChild(menu_item);
    }
    section.appendChild(h1);
    section.appendChild(menu_box);
    section.appendChild(menuBg);

    main.innerHTML = '';
    main.appendChild(section);
}