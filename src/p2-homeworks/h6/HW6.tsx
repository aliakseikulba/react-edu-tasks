import React, {useState} from 'react';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {restoreState, saveState} from './localStorage/localStorage';
import s from './HW6.module.css';

function HW6() {
  const [value, setValue] = useState<string>('');

  const save = () => {
    saveState<string>('editable-span-value', value);
  };
  const restore = () => {
    const previousValue = restoreState('editable-span-value', 'local storage is empty');
    setValue(previousValue);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.inputArea}>
        <SuperEditableSpan
          onEnter={save}
          value={value}
          onChangeText={setValue}
          spanProps={{children: value ? undefined : 'double click to enter text'}}
          className={s.addBorderRadius}
        />
      </div>
      <SuperButton onClick={save}>save</SuperButton>
      <SuperButton onClick={restore}>restore</SuperButton>
    </div>
  );
}

export default HW6;
