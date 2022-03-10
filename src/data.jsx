

export const getPokemons = async ()=>{
    let urlBase = "https://pokeapi.co/api/v2"
    const info = await fetch(urlBase + "/pokemon?limit=1500")
    const infoJson = await info.json()

    const dataAllPokemons = []
    
    
    infoJson.results.forEach(poke=>{

        const index = poke.url.split("/");
        
        dataAllPokemons.push({
            id: index[6],
            name : poke.name,
            img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index[6]}.png`
        })

    })

    return dataAllPokemons
}

