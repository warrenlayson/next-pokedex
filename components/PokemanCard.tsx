import NextImage from 'next/image';
import Link from 'next/link';
import { type Pokemon } from '../types';

type PokemanCardProps = {
  pokeman: Pokemon;
};

const PokemanCard = ({ pokeman }: PokemanCardProps) => {
  return (
    <Link href={`/pokemon/${pokeman.id}`}>
      <a className="flex flex-col items-center p-6 text-center text-gray-800 bg-gray-100 rounded-md shadow-sm hover:shadow-md">
        <NextImage
          src={pokeman.image}
          alt={pokeman.name}
          height={160}
          width={160}
        />
        <h2 className="text-2xl uppercase">
          {pokeman.id}: {pokeman.name}
        </h2>
      </a>
    </Link>
  );
};

export default PokemanCard;
