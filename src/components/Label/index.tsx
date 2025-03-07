import { FC } from 'react';
import classNames from 'classnames';

import './styles.scss';

type LabelType = {
  children: string;
  isRequired?: boolean;
  [restProps: string]: any;
};

const Label: FC<LabelType> = ({ children, isRequired, ...restProps }) => (
  <label
    className={classNames('label', {
      isRequired: isRequired,
    })}
    {...restProps}
  >
    {children}
  </label>
);

export default Label;
