// import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import UpperBody from "./components/UpperBody/UpperBody";
import LowerBody from "./components/LowerBody/LowerBody";


function App() {

  return (
    <>
      <Navbar />
      <Main />
      <UpperBody />
      <LowerBody />
    </>
  )
}

export default App
