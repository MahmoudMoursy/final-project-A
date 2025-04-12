// استيراد المكتبات الضرورية فقط
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// استيراد ملف CSS العام
import './styles/global.css'

import {store} from './Redux/Store'
import {Provider} from 'react-redux'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
)
