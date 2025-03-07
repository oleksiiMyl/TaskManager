import { FC } from 'react';

import './styles.scss';

type TextareaType = {
  [restProps: string]: any;
};

const Textarea: FC<TextareaType> = ({ ...restProps }) => {
  return <textarea className="textarea" {...restProps} />;
};

export default Textarea;
