import { FC } from 'react';

import { useParams } from 'react-router-dom';

export const CharacterPage: FC = () => {
  const { characterId } = useParams();

  return <div>Character {characterId}</div>;
};
