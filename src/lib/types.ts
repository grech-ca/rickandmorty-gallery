export interface Paginated<T extends object> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    previous: string | null;
  };
  results: T[];
}

export const CHARACTER_STATUSES = ['alive', 'dead', 'unknown'] as const;
export type CharacterStatus = (typeof CHARACTER_STATUSES)[number];

export const CHARACTER_GENDERS = ['female', 'male', 'genderless', 'unknown'] as const;
export type CharacterGender = (typeof CHARACTER_GENDERS)[number];

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
