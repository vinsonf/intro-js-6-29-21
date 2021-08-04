import {receipt} from './receipt.js'
export class MenuItem {
    constructor({price, name}) {
        console.log('a new menuItem was created', price, name);
        this.price = price;
        this.name = name;
        console.log(this);
        this.displayItem();
    }

    displayItem() {
        const li = document.createElement('li');
        li.innerHTML = `    
            name: ${this.name}
            price: $${this.price}
        `;

        li.addEventListener('click', () => {
            console.log('click')
            receipt.addItem(new PurchasedItem(this));
        })
        document.body.appendChild(li);
    }
}


export class PurchasedItem extends MenuItem {
    displayItem() {
        console.log('purchased items should not show')
    }
}