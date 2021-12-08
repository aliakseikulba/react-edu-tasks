import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react';
import {DataType} from '../../HW7';
import s from './../../HW7.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: DataType
  onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions =options ? options.map((o, i) => <option key={i} value={o}>{o}</option>) : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChangeCallback(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  return (
    <select className={s.selectStyle} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
