import {MenuItem} from './menu-item.js';
import {receipt} from './receipt.js'
const item = new MenuItem({price: 9.98, name:'Pizza'});
const item2 = new MenuItem({price:.99, name:'Water'});

document.body.appendChild(document.createElement('hr'));
receipt.append();


function buildMenuItem(price, name) {
    return {
        price,
        name
    }
}

console.log(buildMenuItem(2.99, 'Taco'));