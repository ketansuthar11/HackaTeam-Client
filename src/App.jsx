import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
