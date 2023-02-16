import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


const CharacterId = () => {

    const [character, setCharacter] = useState({
		name: "",
		image: ""
	})

    const {query:{id}} = useRouter();
	useEffect(() => {
		if (!id) return

		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setCharacter(data)
			})
	}, [id])


    

    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name}></img>
        </div>
    )
}

export default CharacterId;
