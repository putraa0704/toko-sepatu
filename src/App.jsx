import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Brand from "./components/Brand";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <Home />
      <Brand />
      <Search />
      <Footer />
    </div>
  );
}
export default App;
