// import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import UpperBody from "./components/UpperBody/UpperBody";
import LowerBody from "./components/LowerBody/LowerBody";
import Services from "./components/Services/Services";


function App() {

  return (
    <>
      <Navbar />
      <Main />
      <Services />
      <UpperBody />
      <LowerBody />
    </>
  )
}

export default App
