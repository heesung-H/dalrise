import React, { useCallback, useRef } from "react";
import { useGetCryptoNewsQuery, useGetPokemonByNameQuery } from "./cryptoNewsApi";
import { Pokemon } from '../../app/types';

const News = () => {

    const {  data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

    return (
        <div>News !! <br />
            { error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>{data.species.name}</h3>
                    <img src={data.sprites.front_shiny} alt={data.species.name} />
                </>
             ) : null}
        </div>
    )
}

export default News
