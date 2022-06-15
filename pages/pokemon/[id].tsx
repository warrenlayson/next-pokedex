import { AxiosError } from 'axios';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import pokeapi from '../../lib/pokeapi';
import { Pokeman } from '../../types';

const getPokeman = (id: number): Promise<Pokeman> =>
  pokeapi.get(`/pokemon/${id}`).then((res) => res.data);

function usePokeman(id: number) {
  return useQuery(['pokeman', id], () => getPokeman(id));
}

const PokemanPage: NextPage = () => {
  const router = useRouter();
  console.log(router);
  const { isLoading, isError, error, data } = usePokeman(
    parseInt(router.query.id as string)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as AxiosError).message}</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-8 text-4xl text-center uppercase">{data?.name}</h1>
      <p>
        Type: <strong>{data?.types[0].type.name}</strong> | Height:{' '}
        <strong>{data?.height}</strong> | Weight:{' '}
        <strong>{data?.weight}</strong>
      </p>
      <Image
        src={data?.sprites.front_default ?? ''}
        alt={data?.name}
        height={96}
        width={96}
        className="card-image"
      />
    </div>
  );
};

export default PokemanPage;
