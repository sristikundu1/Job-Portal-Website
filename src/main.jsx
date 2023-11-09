import React from 'react'
import ReactDOM from 'react-dom/client'
import {  HelmetProvider } from 'react-helmet-async';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Router/Routes'
import AuthProvider from './Providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
