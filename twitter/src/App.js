import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { UserContextProvider } from './context/context'

import Login from "./pages/Login";
import Home from "./pages/Home"
import User from "./pages/User"
import Tweet from "./pages/Tweet"
import NotFound from './pages/NotFound';


const App = () => {
  return (
      <BrowserRouter>
        <UserContextProvider>
            <Routes>
              <Route path ='/home' element ={<Home/>}/>
              <Route path ='/:username' element= {<User/>}/>
              <Route path ='/login' element={<Login />}/>
              <Route path ='/:username/:id'/>
              <Route path ='/tweet/:id' element ={<Tweet/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
        </UserContextProvider>
      </BrowserRouter>
  );
}

export default App;
