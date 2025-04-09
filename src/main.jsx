// استيراد المكتبات الضرورية فقط
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// استيراد ملف CSS العام
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
)
