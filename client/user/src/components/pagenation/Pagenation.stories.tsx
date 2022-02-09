import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TestPage } from './TestPage';

export default {
  title: `Components/Pagenation`,
  component: TestPage,
} as ComponentMeta<typeof TestPage>;

const Template: ComponentStory<typeof TestPage> = (args) => {
  return <TestPage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  totalTables: 157,
  tablesPerPage: 10,
};
