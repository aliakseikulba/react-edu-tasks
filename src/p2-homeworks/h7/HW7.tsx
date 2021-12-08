import React, {useState} from 'react';
import SuperSelect from './common/c5-SuperSelect/SuperSelect';
import SuperRadio from './common/c6-SuperRadio/SuperRadio';
import s from './HW7.module.css'


export type DataType = Array<string>
const arr:DataType = ['x', 'y', 'z'];

function HW7() {
  const [value, onChangeOption] = useState(arr[0]);

  return (
    <div className={s.wrapper}>
      <div>
        <SuperSelect
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>
      <div>
        <SuperRadio
          name={'radio'}
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>
    </div>
  );
}

export default HW7;
