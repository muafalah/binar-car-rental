import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Redux/app/store';
import Routers from './Routers/Routers';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dropzone-uploader/dist/styles.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Assets/css/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
