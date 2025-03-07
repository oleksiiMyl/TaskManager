import { FC } from 'react';
import classNames from 'classnames';
import './styles.scss';

type BadgeType = {
  status?: 'progress' | 'review' | 'test' | 'done';
  children: string;
};

const Badge: FC<BadgeType> = ({ status, children }) => (
  <div
    className={classNames('badge', {
      [`badge--${status}`]: status,
    })}
  >
    {children}
  </div>
);

export default Badge;
