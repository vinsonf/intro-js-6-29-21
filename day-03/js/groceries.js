const list = [];
const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerHTML = 'List';



const itemInput = document.createElement('input');
document.body.appendChild(itemInput);
itemInput.placeholder = 'Enter an Item Name';



const addItemButton = document.createElement('button');
document.body.appendChild(addItemButton);
addItemButton.innerHTML = 'Add Item';
addItemButton.addEventListener('click', function() {

    addToList();
    drawList();
});

function addToList() {
    const value = itemInput.value;
    list.push(value);
    list.sort();
    itemInput.value = '';
}

function drawList() {
    ol.innerHTML = '';
    list.forEach(function(value) {
        const li = document.createElement('li');
        li.innerHTML = value;
        ol.appendChild(li);
    });
}

const ol = document.createElement('ol');
document.body.appendChild(ol);
