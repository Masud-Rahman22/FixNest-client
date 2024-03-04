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
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
