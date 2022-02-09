import { MODAL_SIZE } from '@src/store/modalState';
import { ComponentMeta } from '@storybook/react';
import { ModalTest } from './ModalTest';
import { Modal } from './Modal';

export default {
  title: `Components/Modal`,
  component: Modal,
  argTypes: {
    size: {
      options: MODAL_SIZE,
      defaultValue: MODAL_SIZE.LEGULAR,
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Modal>;

// const Template: ComponentStory<typeof PopModal> = (args) => <Modal />;

// export const Modal = Template.bind({});
// Modal.args = {};

export const Default = () => <ModalTest />;
