import { FC, ReactElement } from 'react';
import './styles.scss';

type BoardType = {
  children: ReactElement | ReactElement[];
};

const Board: FC<BoardType> = ({ children }) => <main className="board">{children}</main>;

export default Board;
