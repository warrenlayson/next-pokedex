import { useQuery } from 'react-query';
import pokeapi from '../lib/pokeapi';
import type { Pokeman } from '../types';

const getPokeman = (id: number): Promise<Pokeman> =>
  pokeapi.get(`/pokemon/${id}`).then((res) => res.data);

export default function usePokeman(id: number) {
  return useQuery(['pokeman', id], () => getPokeman(id));
}
