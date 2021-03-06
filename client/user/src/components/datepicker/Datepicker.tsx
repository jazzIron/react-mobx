/* 
    toast ui : datepicker
    https://ui.toast.com/tui-date-picker
    https://nhn.github.io/tui.date-picker/latest/DatePicker

*/
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import ToastDatePicker, { CalendarOptions } from 'tui-date-picker';

import 'tui-date-picker/dist/tui-date-picker.min.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import { IToastDP } from './datepicker_types';

export function Datepicker({ useTime, onChange, defaultDate }: IToastDP) {
  const [tui, setTui] = useState<ToastDatePicker>();
  const tuiWrapperRef = useRef(null);
  const tuiInputRef = useRef(null);

  const onChangeHandler = () => {
    const formatDate = tui
      ? moment(tui.getDate()).format(useTime ? 'yyyy-MM-DD HH:mm A' : 'yyyy-MM-DD')
      : '';

    onChange(formatDate);
  };

  useEffect(() => {
    if (tui === undefined) {
      setTui(
        new ToastDatePicker(tuiWrapperRef.current || '#wrapper', {
          input: {
            element: tuiInputRef.current || '#datepicker-input',
            format: useTime ? 'yyyy-MM-dd HH:mm A' : 'yyyy-MM-dd',
          },
          language: 'ko',
          timePicker: useTime,
          autoClose: false,
          date: defaultDate ? defaultDate : new Date(),
        }),
      );
    } else {
      tui.on('change', () =>
        typeof onChangeHandler === 'function' ? onChangeHandler() : undefined,
      );

      tui.on(
        'draw',
        (event: { date: Date; type: 'date' | 'month' | 'year'; dateElements: HTMLElement[] }) => {
          for (let i = 0, len = event.dateElements.length; i < len; i += 1) {
            const el = event.dateElements[i];
            console.log(el);
            // const date = new Date(getData(el, "timestamp"));
            // console.log(date);
          }
        },
      );
    }

    return () => {
      if (tui !== undefined) {
        tui.destroy();
      }
    };
  });

  return (
    <>
      <div className="tui-datepicker-input tui-datetime-input tui-has-focus">
        <input
          ref={tuiInputRef}
          type="text"
          id="tui-date-picker-target"
          aria-label="Date-Time"
          readOnly
        />
        <span className="tui-ico-date"></span>
      </div>
      <div id="tui-date-picker-container" ref={tuiWrapperRef} style={{ marginTop: '-1px' }}></div>
    </>
  );
}

Datepicker.defaultProps = {
  useTime: false,
};
