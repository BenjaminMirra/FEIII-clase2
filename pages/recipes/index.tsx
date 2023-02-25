import React from 'react'

const Recipes = ({ recipes }: any) => {

    return (
        <div>
            <h1>
                Recetas
            </h1>
            <ul>
                {recipes?.map((recipe: any) => {
                    return (
                    <li key={recipe.id}>
                        {recipe.title}
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Recipes;

export async function getStaticProps() {

    const response = await fetch(`https://62b4dc33530b26da4cc60791.mockapi.io/bolos/`);
    const recipes = await response.json();

    return {
        props: {
            recipes
        },
    }
}