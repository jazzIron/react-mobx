import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ICON_LIST } from '../icon/icon.data';
import CheckBox from './CheckBox';
import MasterCheckBox from './MasterCheckBox';

export default {
  title: `Components/CheckBox`,
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Suffiex = Template.bind({});
Suffiex.args = {
  suffixIcon: ICON_LIST.x_input,
  onClickSuffix: () => console.log('click Suffix'),
};
