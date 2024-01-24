import './App.css';
import Header from "./components/Header"
import Item from "./components/Item"
import Axiom from "./assets/Axiom3.jpg"
import Starlink from "./assets/starlink.jpg"
import Starlink2 from "./assets/starlinkk.jpg"
import Flight from "./assets/flight.jpg"
import logo from "./assets/logo.png"
import menu from "./assets/menu.png"
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <header>
        <Header logo={logo} menu={menu} />
      </header>
      <div className='item-container'>
          <Item img={Axiom} time="CURRENT MISSION" button="REWATCH" mission="AX-3 MISSION"/>
          <Item img={Starlink} time="UPCOMING LAUNCH" button="WATCH" mission="STARLINK MISSION"/>
          <Item img={Starlink2} time="RECENT LAUNCH" button="REWATCH" mission="STARLINK MISSION"/>
          <Item img={Flight} time="RECENT LAUNCH" button="LEARN MORE" mission="STARSHIP'S SECOND FLIGHT TEST"/>
          <Footer />
        </div>
    
    </div>
  );
}

export default App;
