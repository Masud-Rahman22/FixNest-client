import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthProvider from '../Providers/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { FacebookProvider, CustomChat } from 'react-facebook';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FacebookProvider appId="858033186082162" chatSupport>
      <CustomChat pageId="272973389225647" minimized={true} />
    </FacebookProvider>
    <Toaster />
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={Router} />
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)