import { ReactElement, FC } from 'react';
import './styles.scss';

type OverlayType = {
  children: ReactElement;
};

const Overlay: FC<OverlayType> = ({ children }) => <div className="overlay">{children}</div>;

export default Overlay;
