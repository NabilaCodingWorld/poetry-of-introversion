import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div style={{ fontFamily: 'roboto' }}>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
