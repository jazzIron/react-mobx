import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImagePreview } from './ImagePreview';
import { useArgs } from '@storybook/client-api';

export default {
  title: `Components/ImagePreview`,
  component: ImagePreview,
} as ComponentMeta<typeof ImagePreview>;

const Template: ComponentStory<typeof ImagePreview> = (args) => {
  const [{ value }, updateArgs] = useArgs();
  const handleChange = ({ id, file }: { id: string; file: File | null }) => {
    console.log(file);
    updateArgs({ value: file });
  };

  return <ImagePreview {...args} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  // options: sampleData,
};

export const NonImageDisable = Template.bind({});
NonImageDisable.args = {
  disabled: true,
};

export const SetImageDisable = Template.bind({});
SetImageDisable.args = {
  defaultImage:
    'https://lh3.googleusercontent.com/DQj-gonAVTlhj5W7_DhBVmX-0P42rfvx8TSp1WfQeZ6iFIon6InIS8M4Nbqy7Ql5ahgEXSiRDiWD88v-bcPYIEAg3Q=w640-h400-e365-rj-sc0x00ffffff',
  disabled: true,
};
