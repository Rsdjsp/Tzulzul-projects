import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
//SSR
export async function getServerSideProps(){
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const characters = await res.json()

    return {
        props:{
            characters: characters.results
        }
    }
}

export default function index({characters}) {
  return <div>
      <Head>
          <title>Todos los personajes SSR</title>
          <meta property='description' content='Todos los personajes'></meta>
      </Head>
  {characters.map(character=><Link href={"/charactersSSR/"+character.id} key={character.id}><div>
        <p>{character.name}</p>
        <Image width={200} height={200} src={character.image}></Image>
      </div></Link>)}
</div>;
}
