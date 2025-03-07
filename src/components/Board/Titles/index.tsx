import { FC, ReactElement } from 'react';
import './styles.scss';

type BoardTitlesType = {
  children: ReactElement | ReactElement[];
};

const BoardTitles: FC<BoardTitlesType> = ({ children }) => (
  <ul className="board__titles">{children}</ul>
);

export default BoardTitles;
