import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { router } from './router/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={storse}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);
