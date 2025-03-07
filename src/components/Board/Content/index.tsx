import { FC, ReactElement } from 'react';
import './styles.scss';

type BoardContentType = {
  children: ReactElement | ReactElement[];
};

const BoardContent: FC<BoardContentType> = ({ children }) => (
  <div className="board__content">{children}</div>
);

export default BoardContent;
