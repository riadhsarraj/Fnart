import Home from './home/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Nav from './navbar/Nav';
import Login from './login/Login';
import Event from './event/Event';
import Reservation from './reservation/Reservation';
import Footer from './footer/Footer';
import Gallery from './gallery/Gallery';
import Event2 from './event/Event2';
import Contact from './contact/Contact';
import Dash from './dashboard/Dash';
import DashUsers from './dashboard/DashUsers';
import Dashevent from './dashboard/Dashevent';
import Dashgalery from './dashboard/Dashgalery';
import DashReservation from './dashboard/DashReservation';
import DashEvent2 from './dashboard/DashEvent2';
import DasshMessage from './dashboard/DasshMessage';
import SHop from './shop/SHop';
import DashMaterial from './dashboard/DashMaterial';



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
          <Footer></Footer>
        </>
      }
    />
    <Route
      path="/Acc"
      element={
        <>
          <Nav></Nav>
          <Event></Event>
          <Footer></Footer>
        </>
      }
    />
    <Route
      path="/reservation"
      element={
        <>
          <Nav></Nav>
          <Reservation></Reservation>
          <Footer></Footer>
        </>
      }
    />
  
  <Route
      path="/event"
      element={
        <>
          <Nav></Nav>
          <Event></Event>
          <Footer></Footer>
        </>
      }
    />
    <Route
      path="/gallery"
      element={
        <>
          <Nav></Nav>
          <Gallery></Gallery>
          <Footer></Footer>
        </>
      }
    />
    <Route
      path="/event2"
      element={
        <>
          <Nav></Nav>
          <Event2></Event2>
          <Footer></Footer>
        </>
      }
    />
  
  <Route
      path="/contact"
      element={
        <>
          <Nav></Nav>
          <Contact></Contact>
          <Footer></Footer>
        </>
      }
    />
    <Route
      path="/dash"
      element={
        <>
          <Nav></Nav>
          <Dash></Dash>
          
        </>
      }
    />
    <Route
      path="/dashusers"
      element={
        <>
          <Nav></Nav>
          <DashUsers></DashUsers>
          
        </>
      }
    />
     <Route
      path="/dashevent"
      element={
        <>
          <Nav></Nav>
          <Dashevent></Dashevent>
          
        </>
      }
    />
    <Route
      path="/dashgalery"
      element={
        <>
          <Nav></Nav>
          <Dashgalery></Dashgalery>
          
        </>
      }
    />
     <Route
      path="/dashReservation"
      element={
        <>
          <Nav></Nav>
          <DashReservation></DashReservation>
          
        </>
      }
    />
     <Route
      path="/DashEvent2"
      element={
        <>
          <Nav></Nav>
          <DashEvent2></DashEvent2>
          
        </>
      }
    />
    <Route
      path="/DashMessage"
      element={
        <>
          <Nav></Nav>
          <DasshMessage></DasshMessage>
          
        </>
      }
    />
      <Route
      path="/dashMaterial"
      element={
        <>
          <Nav></Nav>
          <DashMaterial></DashMaterial>
          
        </>
      }
    />
       <Route
      path="/Shop"
      element={
        <>
          <Nav></Nav>
          <SHop></SHop>
          <Footer></Footer>
          
        </>
      }
    />
    
   
  </Routes>
</BrowserRouter>

  );
}

