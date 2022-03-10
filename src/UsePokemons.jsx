import { getPokemons } from "./data.jsx"
import { useEffect, useState } from "react";
import './App.css';


export default function UsePokemons() {

  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    getPokemons()
    .then( pokemons=>{

      
      setIsLoading(false)
      setPokemons( pokemons )
    })
  },[])

  
  
  return ({
    isLoading,
    pokemons
  });
}


