import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'


const Recipes = ({ recipe }: any) => {

    return (
        <>
            <h1>
                Receta
            </h1>
                <div>
                    <h1>{recipe.title}</h1>
                    <br/>
                    <br/>
                    <br/>
                    <h1>Description</h1>
                    <br/>
                    <p>{recipe.description}</p>
                    <br/>
                    <br/>
                    <br/>
                    <h1>Text</h1>
                    <br/>
                    <p>{recipe.text}</p>
                </div>
        </>
    )
}

export default Recipes;



export async function getStaticProps(context: any) {

    const { id } = context.params;
    const response = await fetch(`https://62b4dc33530b26da4cc60791.mockapi.io/bolos/` + id);
    const recipe = await response.json();

    return {
        props: {
            recipe
        },
    }
}

export async function getStaticPaths() {

    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
            { params: { id: '4' } },
            { params: { id: '5' } }
        ],
        fallback: false
    };
}