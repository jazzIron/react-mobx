import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IAddress } from '.';
import { PostCode } from './PostCode';

export default {
  title: `Components/PostCode`,
  component: PostCode,
} as ComponentMeta<typeof PostCode>;

const Template: ComponentStory<typeof PostCode> = (args) => <PostCode {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  onComplete: (data: IAddress) => console.log(data),
};
