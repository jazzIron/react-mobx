/**
 * AG Grid Community
 * AG Grid Community is a free to use product distributed under the MIT License. It is free to use in your production environments.
 *
 * AG Charts Community
 * AG Charts Community (a.k.a. Standalone Charts) is a free to use product distributed under the MIT License. It is free to use in your production environments.
 *
 *  https://www.ag-grid.com/react-data-grid/localisation/
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';

import axios from 'axios';
import { useState } from 'react';
import { Button } from '@components/button/Button';
import { AgTable } from './AgTable';
import { AgTable2 } from './AgTable2';

export default {
  title: `Components/TableAg`,
  component: AgTable,
} as ComponentMeta<typeof AgTable>;

const Template: ComponentStory<typeof AgTable> = (args) => {
  const [rowData, setRowdata] = useState();
  const onGridReady = async () => {
    try {
      const response = await axios.get(
        'https://www.ag-grid.com/example-assets/olympic-winners.json',
      );
      setRowdata(response.data);
    } catch (e) {
      throw new Error('ERROR');
    }
  };

  const frameworkComponents = {
    GenderClickEvent1: (props: any) => {
      return <Button label={'보기'} onClick={() => alert(props.data)} />;
    },
    GenderClickEvent2: (props: any) => {
      return <Button label={'확인하기'} onClick={() => alert(props.data)} />;
    },
  };

  return (
    <AgTable
      onGridReady={onGridReady}
      rowData={rowData}
      frameworkComponents={frameworkComponents}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Test = () => {
  const [rowData, setRowdata] = useState();
  const onGridReady = async () => {
    try {
      const response = await axios.get(
        'https://www.ag-grid.com/example-assets/olympic-winners.json',
      );
      setRowdata(response.data);
    } catch (e) {
      throw new Error('ERROR');
    }
  };

  const frameworkComponents = {
    GenderClickEvent1: (props: any) => {
      return <Button label={'보기'} onClick={() => alert(props.data)} />;
    },
    GenderClickEvent2: (props: any) => {
      return <Button label={'확인하기'} onClick={() => alert(props.data)} />;
    },
  };

  return (
    <AgTable2
      onGridReady={onGridReady}
      rowData={rowData}
      frameworkComponents={frameworkComponents}
    />
  );
};
