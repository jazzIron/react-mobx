import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateRangePicker } from './DateRangePicker';

export default {
  title: `Components/DateRangePicker`,
  component: DateRangePicker,
} as ComponentMeta<typeof DateRangePicker>;

const Template: ComponentStory<typeof DateRangePicker> = (args) => <DateRangePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  useTime: false,
  onChange: (val) => console.log(val),
  defaultDate: { start: new Date('2021-01-06'), end: new Date('2021-01-05') },
};

export const DateTimeRange = Template.bind({});
DateTimeRange.args = {
  useTime: true,
  onChange: (val) => console.log(val),
};
