import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {AuthContextProvider} from './context/authcontext'
import { ArrayProvider } from './pages/Globalarray'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ArrayProvider>
       <AuthContextProvider>
         <App />
       </AuthContextProvider>
    </ArrayProvider>   
  </React.StrictMode>
);

