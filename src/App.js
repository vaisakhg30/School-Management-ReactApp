import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Addstud from './component/Addstud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addfaculties from './component/Addfaculties';
import Viewstud from './component/Viewstud';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route path='/'exact element={<Addstud/>}/>
<Route path='/facul'exact element={<Addfaculties/>}/>
<Route path='/view'exact element={<Viewstud/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
