import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';
import AllRoutes from './routes';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
        <AllRoutes />
    </Provider>
    <ToastContainer />
  </>
)
