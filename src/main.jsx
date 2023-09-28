import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{fontFamily:'Roboto'}}>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)