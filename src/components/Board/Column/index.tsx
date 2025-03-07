import { FC, ReactElement } from 'react';
import classNames from 'classnames';
import './styles.scss';

type BoardColumnType = {
  children?: ReactElement | ReactElement[];
  isDroppable?: boolean;
  [restProps: string]: any;
};

const BoardColumn: FC<BoardColumnType> = ({ children, isDroppable, ...restProps }) => (
  <div
    className={classNames('board__column', {
      'is-droppable': isDroppable,
    })}
    {...restProps}
  >
    {children}
  </div>
);

export default BoardColumn;
