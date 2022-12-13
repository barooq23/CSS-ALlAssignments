import React,{useState,useEffect} from 'react'
import axios from "axios";

const PokemonAxios = () => {
 const [people, setPeople] = useState([]);
 const [click,setClick]= useState(false);
 useEffect(() => {
   axios.get(" https://pokeapi.co/api/v2/pokemon?limit=807")
     .then((response) => setPeople(response.data.results))
     .catch((err) => console.log(err))
 },[]);
 const fetching=()=>{
    if(click===false){
      setClick(true)
    }
    else{
      setClick(false)
    }
    console.log(click)

 }

 return (
   <div>
     <button onClick={fetching}>fetching meeee....</button>
     
     {click
       ? people.map((person, index) => {
           return <div key={index}>{person.name}</div>;
         })
       : ""}

     {/* {click && people.map((poke) => <p>{poke.name}</p>)} */}
   </div>
 );
}

export default PokemonAxios