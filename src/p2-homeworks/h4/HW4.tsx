import React, {ChangeEvent, useState} from 'react';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import s from './HW4.module.css';
import SuperButton from './common/c2-SuperButton/SuperButton';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';

function HW4() {
  const [text, setText] = useState<string>('');
  const error = text ? '' : 'enter anything to test error message';

  const showAlert = () => {
    if (error) {
      alert('red button was clicked');
    } else {
      alert(text); // если нет ошибки показать текст
    }
  };

  const [checked, setChecked] = useState<boolean>(false);
  const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

  return (
    <div className={s.wrapper}>
      <div className={s.column}>
        <SuperInputText
          value={text}
          onChangeText={setText}
          onEnter={showAlert}
          error={error}
          // spanClassName={s.testSpanError}
        />

        <SuperInputText
          className={s.compatibilityTest} // проверьте, работает ли смешивание классов
        />

        {/*----------------------------------------------------*/}

        <SuperButton>
          default
        </SuperButton>

        <SuperButton
          red // пропсу с булевым значением не обязательно указывать true
          onClick={showAlert}
        >
          delete {/*// название кнопки попадёт в children*/}
        </SuperButton>

        <SuperButton disabled>
          disabled
        </SuperButton>

        {/*----------------------------------------------------*/}

        <SuperCheckbox
          checked={checked}
          onChangeChecked={setChecked}
        >
          first checkbox {/*// этот текст попадёт в children*/}
        </SuperCheckbox>

        {/*// onChange тоже должен работать*/}
        <SuperCheckbox checked={checked} onChange={testOnChange}>
          second checkbox
        </SuperCheckbox>
      </div>
    </div>
  );
}

export default HW4;
