import { FC } from 'react';
import './styles.scss';

type SelectType = {
  options: string[];
  [restProps: string]: any;
};

const Select: FC<SelectType> = ({ options, ...restProps }) => {
  return (
    <select role="menu" className="select" {...restProps}>
      {options.map((optionItem) => (
        <option key={optionItem}>{optionItem}</option>
      ))}
    </select>
  );
};

export default Select;
