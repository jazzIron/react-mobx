import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Datepicker } from './Datepicker';

export default {
  title: `Components/Datepicker`,
  component: Datepicker,
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args) => <Datepicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (val: string) => console.log(val),
};

export const DateTimePick = Template.bind({});
DateTimePick.args = {
  useTime: true,
  onChange: (val: string) => console.log(val),
};
