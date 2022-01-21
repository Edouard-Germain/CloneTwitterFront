import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { UserContextProvider } from './context/context'

import Login from "./pages/Login";
import Home from "./pages/Home"
import User from "./pages/User"



function App() {
  return (
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path ='/home' element ={<Home/>}/>
            <Route path ='/:username' element= {<User/>}/>
            <Route path ='/login' element={<Login />}/>
            <Route path ='/:username/:id'/>
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
  );
}

export default App;
