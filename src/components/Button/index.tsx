import { FC } from 'react';
import './styles.scss';
import classNames from 'classnames';

type ButtonType = {
  children: string;
  type?: 'button' | 'submit';
  variant?: 'secondary';
  [restProps: string]: any;
};

const Button: FC<ButtonType> = ({ children, type = 'button', variant, ...restProps }) => (
  <button
    type={type}
    className={classNames('button', {
      [`button--${variant}`]: variant,
    })}
    {...restProps}
  >
    {children}
  </button>
);

export default Button;
