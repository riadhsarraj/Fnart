import Home from './home/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Nav from './navbar/Nav';
import Login from './login/Login';
import Event from './event/Event';
import Reservation from './reservation/Reservation';

export default function App() {


  return (
    
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Login></Login>} />
    <Route
      path="/home"
      element={
        <>
          <Nav></Nav>
          <Home></Home>
        </>
      }
    />
    <Route
      path="/Acc"
      element={
        <>
          <Nav></Nav>
          <Event></Event>
        </>
      }
    />
    <Route
      path="/reservation"
      element={
        <>
          <Nav></Nav>
          <Reservation></Reservation>
        </>
      }
    />
  </Routes>
</BrowserRouter>

  );
}

