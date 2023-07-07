
import Nav from './model/component/Nav';
import Index from './pages/Index';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Officer from './pages/Officer';
import Home from './pages/home';
import Addofficer from './pages/Addofficer';
import Updateofficer from './pages/UpdateOfficer';
import UpdateOfficer from './pages/UpdateOfficer';

function App() {
  return (
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/officer' element={<Officer/>}/>
          <Route path='/addofficer' element={<Addofficer/>}/>
          <Route path='/UpdateOfficer/:oid' element={<UpdateOfficer/>}/>
            
            
            {/*<Route path='/officer' element={<Officer/>}/> */}

          </Routes>
      </BrowserRouter>
  );
}

export default App;
