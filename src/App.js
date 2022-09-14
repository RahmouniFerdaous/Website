import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom"; /* Routes instead of switch v6 */
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import BuyNow from "./Routes/BuyNow";
import ContactUs from "./Routes/ContactUs";
import OurBrands from "./Routes/OurBrands";
import Sustainability from "./Routes/Sustainability";
import WhoWeAre from "./Routes/WhoWeAre";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/"  exact  element={<Home />} /> 
      <Route path="/BuyNow" element={<BuyNow />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/OurBrands" element={<OurBrands />} />
      <Route path="/Sustainability" element={<Sustainability />} />
      <Route path="/WhoWeAre" element={<WhoWeAre />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
