import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {UserContextProvider} from './context/context'

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path ='/'></Route>
          <Route path ='/users/:id'></Route>
          <Route path ='/login'></Route>
          <Route path ='/:username/:id'></Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
