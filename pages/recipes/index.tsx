import Link from 'next/link';
import React from 'react'

const Recipes = ({ recipes }: any) => {

    return (
        <div>
            <h1>
                Recetas
            </h1>
            <ul>
                {recipes?.map((recipe: any) => {
                    <li key={recipe.id}>
                        {recipe.title}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Recipes;


