import { FC } from 'react';
import classNames from 'classnames';
import './styles.scss';

type InputType = {
  isInvalid?: boolean;
  [restProps: string]: any;
};

const Input: FC<InputType> = ({ isInvalid, ...restProps }) => (
  <input
    className={classNames('input', {
      isInvalid: isInvalid,
    })}
    type="text"
    {...restProps}
  />
);

export default Input;
