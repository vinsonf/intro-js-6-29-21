function getPokemonByName(name) {
    const base_url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(base_url + name)
    .then( res => {
        return res.json();
    }).then( facts => {
        console.log(facts);
        const h1 = document.createElement('h1');
        h1.innerText = facts.name;
        document.body.appendChild(h1);
        const img = document.createElement('img');
        document.body.appendChild(img);
        img.src = facts.sprites.front_default;
        img.width = '400';
    }).catch( err => console.log(err));
}
getPokemonByName('charizard');
function getPokemonList() {
    const base_url = 'https://pokeapi.co/api/v2/pokemon/?offset=1&limit=10';

    fetch(base_url)
    .then(res => res.json() )
    .then(data => {
        data.results.forEach( pokemon => {
            const li = document.createElement('li');
            li.innerText = pokemon.name;
            document.body.appendChild(li);
            li.addEventListener('click', () => {
                getPokemonByName(pokemon.name);
            })
        });
    });
}

getPokemonList();

