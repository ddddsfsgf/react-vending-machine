import './App.css'
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/soda" element={<Soda/>} />
            <Route path="/candy" element={<Candy/>} />
            <Route path="/chips" element={<Chips/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
