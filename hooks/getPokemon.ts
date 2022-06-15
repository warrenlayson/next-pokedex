import { useQuery } from 'react-query';
import pokeapi from '../lib/pokeapi';
import type { GetPokemonsResponse, Pokemon } from '../types';

const getPokemon = (offset: number | null): Promise<Pokemon[]> => {
  return pokeapi
    .get<GetPokemonsResponse>('/pokemon', {
      params: {
        limit: 150,
        offset,
      },
    })
    .then((res) =>
      res.data.results.map((data, idx) => {
        const id = idx + 1;
        return {
          name: data.name,
          id,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      })
    );
};

export default function usePokemon(limit: number | null = null) {
  return useQuery(['pokemon', limit], () => getPokemon(limit), {
    keepPreviousData: true,
  });
}
