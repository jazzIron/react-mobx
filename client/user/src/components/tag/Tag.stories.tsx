import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from './Tag';
import { sampleData } from './sample.data';

export default {
  title: `Components/Tag`,
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => {
  return <Tag {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  options: sampleData,
};
