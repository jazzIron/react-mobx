import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';
import { INPUT_TYPE } from './InputForm_types';
import { useArgs } from '@storybook/client-api';

export default {
  title: `Components/Input`,
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [{ value }, updateArgs] = useArgs();
  const handleChange = (value: string) => {
    updateArgs({ value: value });
  };
  return <Input {...args} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  type: INPUT_TYPE.TEXT,
  readOnly: false,
  disabled: false,
  placeholder: '입력해 주세요.',
  value: '',

  onChange: (value: string) => {
    // console.log(value);
  },
};
