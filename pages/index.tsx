import { AxiosError } from 'axios';
import type { NextPage } from 'next';
import { useState } from 'react';
import PokemanCard from '../components/PokemanCard';
import usePokemon from '../hooks/getPokemon';

const Home: NextPage = () => {
  const [text, setText] = useState('');

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    usePokemon();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1 className="my-8 text-4xl text-center uppercase">Next Pokedex</h1>

      <input
        type="text"
        className="w-full p-4 text-lg border-2 border-gray-200 rounded-md"
        placeholder="Search Pokemon"
        value={text}
        onChange={handleChange}
      />

      {/* Pokemon grid */}
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {(error as AxiosError).message}</div>
        ) : (
          <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((pokeman) => (
              <PokemanCard pokeman={pokeman} key={pokeman.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
