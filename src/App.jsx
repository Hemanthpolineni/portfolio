import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nabar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Main from "./pages/Main"

function App(){
  return (
    <BrowserRouter>
    <Nabar/>
    <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;