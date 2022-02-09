import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Button, BUTTON_THEME } from '../button';
import { ICON_LIST } from '../icon/icon.data';
import MasterCheckBox from './MasterCheckBox';
import { options } from './sample.data';

export default {
  title: `Components/CheckBox/MasterCheckBox`,
  component: MasterCheckBox,
} as ComponentMeta<typeof MasterCheckBox>;

const Template: ComponentStory<typeof MasterCheckBox> = (args) => {
  const [btnDisable, setDisable] = useState(true);
  const ctrlButtonDisable = (value: boolean) => {
    setDisable(value);
  };
  return (
    <>
      <MasterCheckBox {...args} setBtnDisable={ctrlButtonDisable} />
      <Button
        label={'다음'}
        onClick={() => console.log('button click')}
        isDisabled={btnDisable}
        theme={BUTTON_THEME.PRIAMRY}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  options: options,
  masterLabel: 'master check',
  onClickIcon: () => console.log('click suffix'),
  suffixIcon: ICON_LIST.x_input,
};
