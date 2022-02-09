import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Datepicker } from './Datepicker';
import { DateRangePicker } from './DateRangePicker';

describe('datepicker test', () => {
  it('render datepicker', () => {
    const util = render(<Datepicker useTime={true} onChange={(val) => true} />);
  });

  it('render rangeDatePicker', () => {
    const util = render(<DateRangePicker useTime={true} onChange={(val) => true} />);
  });
});
