// global 
const menu = [];

function createHeader() {
    // functional scope
    let score = 0;
    const header = document.createElement('h1');
    document.body.appendChild(header);    
    // const header2 = document.querySelector('h1');
    header.innerText = 'Restuarant';

    return {
        header, 
        score,
    };
}
var closureInfo = createHeader();
var cI = createHeader();

function getBread() {
    return getPantryItem('bread');
}

function getPeanutButter() {
    return getPantryItem('peanut butter')
}

function getPantryItem(item) {
    console.log('go to pantry and get ' + item );
    return item;
}

function getFridgeItem(item) {
    console.log('go to refridgerator and get ' + item );
    return item;
}

menu.push(
    {
      name: 'pbj sandwich',
      price: 20.99,
      description: 'creamy peanut butter and sweet jam.',
      steps: function() {
        this.getBread();
        getPeanutButter();
        getPantryItem('Jam');
      },
      getBread: function(){
        console.log('logic for bread');
      }
    },
    {
        name: 'turkey sandwich',
        price: 40.99,
        description: 'pretty bird.',
        steps: function() {
            getBread();
            getFridgeItem('turkey');

        }
    },
    {
        name: 'turkey sandwich',
        price: 30.99,
        description: 'pretty bird.',
        steps: function() {
            getBread();
            getFridgeItem('turkey');

        }
    }
);

function createMenu() {
    const listElement = document.createElement('ol');
    document.body.appendChild(listElement);
    menu.forEach( (foodItem) => {
        const li = document.createElement('li');
        listElement.appendChild(li);
        li.innerText = `${foodItem.name} - ${foodItem.price}
            description: ${foodItem.description}

        `;

        li.addEventListener('click', () => {
            foodItem.steps();
        })
    });
}

createMenu();
