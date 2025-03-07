import { FC } from 'react';
import './styles.scss';

type HeaderTitleType = {
  children: string;
};

const HeaderTitle: FC<HeaderTitleType> = ({ children }) => (
  <h1 className="header__title">{children}</h1>
);

export default HeaderTitle;
