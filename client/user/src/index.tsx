import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyle';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
    <ToastContainer />
  </StrictMode>,
  document.getElementById('root'),
);
