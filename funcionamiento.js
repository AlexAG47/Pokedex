const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("inputPokemon");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeTip = data.types.map(typ => typ.type.name);
            let vida = data.stats[0].base_stat;
            let pokeAtk = data.stats[1].base_stat;
            let pokeDef = data.stats[2].base_stat;
            let pokeAtkEsp = data.stats[3].base_stat;
            let pokeDefEsp = data.stats[4].base_stat;
            let pokeSpeed = data.stats[5].base_stat;
            let pokeMoves = data.moves.map(mov => mov.move.name);   
            pokeImage(pokeImg);
            pokeTipo(pokeTip);
            pokeVida(vida);
            pokeAtak(pokeAtk);
            pokeDefen(pokeDef);
            pokeAtakEsp(pokeAtkEsp);
            pokeDefenEsp(pokeDefEsp);
            pokeVeloc(pokeSpeed);
            pokeMovientos(pokeMoves);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImagen");
    pokePhoto.src = url;
}

const pokeTipo = (tipos) => {
    const pokeTipos = document.getElementById("tipoPokemon");
    pokeTipos.innerText = "";
    pokeTipos.innerText= "Tipo de pokemon: "
    pokeTipos.append(tipos);
}

const pokeVida = (hp) => {
    const pokeVid = document.getElementById("hp");
    pokeVid.innerText = "";
    pokeVid.innerText = "HP: ";
    pokeVid.append(hp);
}

const pokeAtak = (atk) => {
    const pokeAtaque = document.getElementById("atk");
    pokeAtaque.innerText = "";
    pokeAtaque.innerText = "ATK: ";
    pokeAtaque.append(atk);
}

const pokeDefen = (def) => {
    const pokeDefensa = document.getElementById("def");
    pokeDefensa.innerText = "";
    pokeDefensa.innerText = "DEF: ";
    pokeDefensa.append(def);
}

const pokeAtakEsp = (atkesp) => {
    const pokeAtaqueEsp = document.getElementById("atkesp");
    pokeAtaqueEsp.innerText = "";
    pokeAtaqueEsp.innerText = "ATK-ESP: ";
    pokeAtaqueEsp.append(atkesp);
}

const pokeDefenEsp = (defesp) => {
    const pokeDefensaEsp = document.getElementById("defesp");
    pokeDefensaEsp.innerText = "";
    pokeDefensaEsp.innerText = "DEF-ESP: ";
    pokeDefensaEsp.append(defesp);
}

const pokeVeloc = (speed) => {
    const pokeVelocidad = document.getElementById("speed");
    pokeVelocidad.innerText = "";
    pokeVelocidad.innerText = "SPEED: ";
    pokeVelocidad.append(speed);
}


const pokeMovientos = (movimientos) => {
    const pokeMovi = document.getElementById("moviPokemon");
    pokeMovi.innerText = ""; 
    pokeMovi.append(movimientos);
}