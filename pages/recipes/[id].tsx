import { useRouter } from 'next/router'
import React from 'react'


const RecipeId = ({recetas} : any) => {
   
    const {query:{id}} = useRouter();

    return (
        <div>
            <h1>{recetas[1].title}</h1>
        </div>
    )
}

export default RecipeId;


export async function getStaticProps() {

    const response = await fetch(`https://62b4dc33530b26da4cc60791.mockapi.io/bolos/`);
    const data = await response.json();

    return {
        props: { recetas: data },
    }
}

export async function getStaticPaths() {

    const res = await fetch("https://62b4dc33530b26da4cc60791.mockapi.io/bolos/");
    const recipes = await res.json();

    const paths = recipes.map((recipe: any) => ({
        params: { id: recipe.id },
    }));

    return { paths, fallback: false };
}