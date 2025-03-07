import { FC, ReactElement } from 'react';
import './styles.scss';

type BoardInnerType = {
  children: ReactElement | ReactElement[];
};

const BoardInner: FC<BoardInnerType> = ({ children }) => (
  <div className="board__inner">{children}</div>
);

export default BoardInner;
