// A mock function to mimic making an async request for data
//import { createApi } from '@reduxjs/toolkit/query'
import { RootState } from '../../app/store';
//import { createApi, coreModule,  fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pokemon } from '../../app/types';
import axios from 'axios';
/*
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://pokeapi.co/api/v2/',
    //baseUrl: 'http://localhost:3000/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,      
    }),
  }),
})
*/

export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

// export function fetchPoketmon(name: string):Promise<{ data: Pokemon | any | undefined |    fetchPoketmon(}> {
//   // return new Promise<{ data: Pokemon }>((resolve) => {
//   //   //const result = pokemonApi.useGetPokemonByNameQuery(name);
//   //   resolve({ data: { id: 0 }} );
//   // }
//   // );
//   //const { data: post, isFetching, isLoading } = pokemonApi.useGetPokemonByNameQuery(name);
//   return axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
// }

