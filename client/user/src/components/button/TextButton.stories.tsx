import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BUTTON_SIZE } from './button_types';
import { TextButton } from './TextButton';

export default {
  title: `Components/TextButton`,
  component: TextButton,
  argTypes: {
    size: {
      options: BUTTON_SIZE,
      defaultValue: BUTTON_SIZE.SMALL,
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'button',
  onClick: () => console.log('click'),
  isDisabled: false,
  leftIcon: 'icn_check',
  rightiCon: 'icn_check_dis',
};
