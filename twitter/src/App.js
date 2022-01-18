import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {UserContextProvider} from './context/context'
import Login from "./pages/Login";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path ='/home'/>
          <Route path ='/:username'/>
          <Route path ='/login' element={<Login />}/>
          <Route path ='/:username/:id'/>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
