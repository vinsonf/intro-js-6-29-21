const offsetInput = document.querySelectorAll('input')[0];
const listLengthInput = document.querySelectorAll('input')[1];
const button = document.querySelector('button');
const listEl = document.querySelector('.list');
const pokemonEl = document.querySelector('.pokemon');
let offset = 1;
let listLength = 20;

button.addEventListener('click', () => {
    offset = offsetInput.value;
    listLength = listLengthInput.value;
    getPokemonList();
})

function getPokemonByName(name) {
    const base_url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(base_url + name)
    .then( res => {
        return res.json();
    }).then( facts => {
        pokemonEl.innerHTML = '';
        console.log(facts);
        const h1 = document.createElement('h1');
        h1.innerText = facts.name;
        pokemonEl.appendChild(h1);
        const img = document.createElement('img');
        pokemonEl.appendChild(img);
        img.src = facts.sprites.front_default;
        img.width = '400';
    }).catch( err => console.log(err));
}
getPokemonByName('charizard');
function getPokemonList() {
    const base_url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${listLength}`;

    fetch(base_url)
    .then(res => res.json() )
    .then(data => {

        listEl.innerHTML = '';
        console.log(data);
        data.results.forEach( pokemon => {
            const li = document.createElement('li');
            li.innerText = pokemon.name;
            listEl.appendChild(li);
            li.addEventListener('click', () => {
                getPokemonByName(pokemon.name);
            })
        });
    });
}

getPokemonList();

