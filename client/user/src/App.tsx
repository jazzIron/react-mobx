import { ReactElement } from 'react';
import { RecoilRoot } from 'recoil';
import { RouterManager } from './routes/RouterManager';
import { Themes } from './theme';
import { ThemeProvider } from '@emotion/react';

function App(): ReactElement {
  return (
    <ThemeProvider theme={Themes}>
      <RecoilRoot>
        <RouterManager />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
