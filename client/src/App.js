import './App.css';
import AdminPer from './components/AdminPer';
import HomePage from './components/HomePage';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Login/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Admin' element={<AdminPer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
