import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import { Main } from './Contexts/Main';


function App() {
  return (
    <div className="App">
      <Main>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
