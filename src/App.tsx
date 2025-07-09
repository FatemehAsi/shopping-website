import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Store from "./pages/store/Store.tsx";
import Navbar from "./components/navbar/Navbar.tsx";

function App() {

  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
        </Routes>
    </>
  )
}

export default App
