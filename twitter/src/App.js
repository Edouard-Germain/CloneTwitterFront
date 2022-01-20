import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { UserContextProvider } from './context/context'
import Login from "./pages/Login";
import Home from "./pages/Home"

function App() {
  return (
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path ='/home' element ={<Home/>}/>
            <Route path ='/:username'/>
            <Route path ='/login' element={<Login />}/>
            <Route path ='/:username/:id'/>
          </Routes>
        </UserContextProvider>
      </BrowserRouter>

  );
}

export default App;
