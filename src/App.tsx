import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Store from "./pages/store/Store.tsx";
import Layout from "./components/layout/Layout.tsx";
import Product from "./pages/product/Product.tsx";

function App() {

  return (
    <>
        <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/product/:id" element={<Product/>}/>
        </Routes>
        </Layout>
    </>
  )
}

export default App
