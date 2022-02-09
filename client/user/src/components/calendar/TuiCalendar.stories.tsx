import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calendar } from './Calendar';

export default {
  title: `Components/Calendar`,
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar />;

export const Default = Template.bind({});
Default.args = {};
