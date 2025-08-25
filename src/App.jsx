import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Brand from "./components/Brand";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Pembelian from "./pages/Pembelian";
import AllProducts from "./pages/AllProducts";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";






function App() {
  return (
    <BrowserRouter>
      <div className="bg-white text-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Brand />
                <Search />
              </>
            }
          />
          <Route path="/pembelian/:brand" element={<Pembelian />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
