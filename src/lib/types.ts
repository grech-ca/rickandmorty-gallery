export interface Paginated<T extends object> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    previous: string | null;
  };
  results: T[];
}

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface CharacterLocationReference {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: CharacterLocationReference;
  location: CharacterLocationReference;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
