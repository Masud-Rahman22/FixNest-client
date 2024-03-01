import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthProvider from '../Providers/AuthProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <Provider store={store}>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
