import { FC, ReactElement } from 'react';
import './styles.scss';

type ContainerType = {
  children: ReactElement | ReactElement[];
};

const Container: FC<ContainerType> = ({ children }) => <div className="container">{children}</div>;

export default Container;
