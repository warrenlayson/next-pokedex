export interface GetPokemonsResponse {
  count: number;
  next: string;
  previous?: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  id: number;
  image: string;
}

export interface Type {
  name: string;
  url: string;
}

export interface Pokeman {
  types: {
    slot: number;
    type: Type;
  }[];
  weight: number;
  height: number;
  name: string;
  sprites: {
    front_default: string;
  };
}
