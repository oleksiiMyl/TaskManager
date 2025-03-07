import { FC } from 'react';

import './styles.scss';

type ValidationErrorType = {
  children: string;
};

const ValidationError: FC<ValidationErrorType> = ({ children }) => {
  return <p className="validation-error">{children}</p>;
};

export default ValidationError;
