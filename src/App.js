import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Addstud from './component/Addstud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addfaculties from './component/Addfaculties';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route path='/'exact element={<Addstud/>}/>
<Route path='/facul'exact element={<Addfaculties/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
