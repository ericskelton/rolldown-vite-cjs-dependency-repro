import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import TabOne from './components/TabOne'
import TabTwo from './components/TabTwo'
import TabThree from './components/TabThree'

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'system-ui, sans-serif' }}>
        <nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #e6e6e6' }}>
          <NavLink to="/" end style={({ isActive }) => ({ padding: '8px 12px', textDecoration: 'none', borderRadius: 6, background: isActive ? '#0366d6' : 'transparent', color: isActive ? 'white' : '#0366d6' })}>
            Tab One
          </NavLink>
          <NavLink to="/two" style={({ isActive }) => ({ padding: '8px 12px', textDecoration: 'none', borderRadius: 6, background: isActive ? '#0366d6' : 'transparent', color: isActive ? 'white' : '#0366d6' })}>
            Tab Two
          </NavLink>
          <NavLink to="/three" style={({ isActive }) => ({ padding: '8px 12px', textDecoration: 'none', borderRadius: 6, background: isActive ? '#0366d6' : 'transparent', color: isActive ? 'white' : '#0366d6' })}>
            Tab Three
          </NavLink>
        </nav>

        <main>
            <Routes>
              <Route path="/" element={<TabOne />} />
              <Route path="/two" element={<TabTwo />} />
              <Route path="/three" element={<TabThree />} />
            </Routes>
          
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
