import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RestApi } from './RestApiTest';

export default {
  title: `Components/RestApi`,
  component: RestApi,
} as ComponentMeta<typeof RestApi>;

const Template: ComponentStory<typeof RestApi> = (args) => <RestApi />;

export const Default = Template.bind({});
Default.args = {};
