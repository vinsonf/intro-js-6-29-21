export class Receipt {
    menuItems = [];
    tipPercent = 10;
    element = document.createElement('div');
    percentageInput = document.createElement('input');
    constructor() {
        console.log('a new receipt was created');
        document.body.appendChild(this.element);
    }

    append() {
        document.body.appendChild(this.element);  
    }

    addItem(menuItem) {
        console.log('add item', menuItem);
        this.menuItems.push(menuItem);
        console.log(this);
        this.displayReceipt();
    }

    get total() {
        let total = 0;
        this.menuItems.forEach((item) => {
            total += item.price;
        });
        console.log(total);
        return total.toFixed(2);
    }

    get tip() {
        return (this.tipPercent / 100 * this.total).toFixed(2);
    }

    displayReceipt() {
       this.element.innerHTML = '';
        this.menuItems.forEach((item) => {
            this.addLineItem(`name: ${item.name}, ${item.price}`);
           
        });
        this.addLineItem(`Total: $${this.total}`);  
        
       
        this.element.appendChild(this.percentageInput);

        this.percentageInput.addEventListener('input', () => {
            this.tipPercent = Number(this.percentageInput.value);
            this.displayReceipt();
        });

        this.addLineItem(`Tip: $${this.tip}`); 
        this.addLineItem(`Total with Tip: $${Number(this.total) + Number(this.tip)}`);
        this.percentageInput.focus(); 
    }

    addLineItem(text) {
        const totalLi = document.createElement('li');
        totalLi.innerHTML = text;
        this.element.appendChild(totalLi);
    }



}

export const receipt = new Receipt();