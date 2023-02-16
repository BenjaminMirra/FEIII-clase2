
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Character = {
    id: number,
    name: string,
    image: string
}

const Character = () => {

    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)
            });
    }, [])

    return (
        <div>
            <h1>Listado personajes</h1>
            <br></br>
            {characters?.map(({id,name})=>{
                return (
                <li key={id}>
                    <Link href={"/characters/" + id}>
                        {name}
                    </Link>
                </li>
                )
            })}
        </div>
    )
}

export default Character;
