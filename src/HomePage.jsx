import { useEffect, useState } from "react";
import UsePokemons from "./UsePokemons.jsx"
import handleButEvent from "./handleButEvent.jsx";
 

export default function HomePage(){

    const {isLoading, pokemons} = UsePokemons();
    const [currentPage, setCurrentPage] = useState(0)
    
    if(isLoading){
        return <div className="info-loading">
            <p>Cargando...</p>
        </div>

    }

    const nextPage = ()=>{ if (currentPage<112){
        setCurrentPage(currentPage + 10)
    }else{

    } }
    const prevPage = ()=>{ if (currentPage<112) setCurrentPage(currentPage - 10)}

    function filteredPokemons(){
        return pokemons.slice(currentPage, currentPage+10)
    }
    return(
        <div className="home-page-container">
            <h1>Listado de Pokemons</h1>
            <hr />

            <table className="pokemons-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            filteredPokemons().map(pokemon=>{


                                return(

                                    <tr key={pokemon.id}>
                                        <td>{pokemon.id}</td>
                                        <td>{pokemon.name}</td>
                                        <td><img src={pokemon.img} alt="" /></td>
                                    </tr>
                                )
                            })
                        }

                        
                </tbody>
            </table>

            <button 
            key= "prev-button"
            onClick={prevPage}>
                Prev
            </button>
            <button  
            key= "next-button"
            onClick={nextPage}>
                Next
            </button>
        </div>
    )
}