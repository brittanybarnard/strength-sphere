// import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import UpperBody from "./components/UpperBody/UpperBody";
import LowerBody from "./components/LowerBody/LowerBody";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <>
      <Navbar />
      <Main />
      <Services />
      <UpperBody />
      <LowerBody />
      <Footer />
    </>
  )
}

export default App
