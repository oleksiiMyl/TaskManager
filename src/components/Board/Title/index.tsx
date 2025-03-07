import { FC } from 'react';
import './styles.scss';

type BoardTitleType = {
  children: string;
};

const BoardTitle: FC<BoardTitleType> = ({ children }) => (
  <li className="board__title">{children}</li>
);

export default BoardTitle;
