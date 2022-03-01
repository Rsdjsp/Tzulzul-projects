import React from 'react';
export const getServerSideProps = async ({params})=>{
    const res = await fetch("https://rickandmortyapi.com/api/character/"+params.id)
    const character = await res.json()

    return {
        props:{
            character
        }
    }
}
export default function personaje({character}) {
  return <div>
    <h1>Personaje: {character.name}</h1>
    {/* <p>Query: {ejemplo}</p> */}
</div>;
}
