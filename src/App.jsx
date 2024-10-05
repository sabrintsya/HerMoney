import { Routes, Route } from "react-router-dom";
import NavbarHerMoney from "./components/NavbarHerMoney";
import HomepageHerMoney from "./pages/HomepageHerMoney";
import KelasHerMoney from "./pages/KelasHerMoney";
import TestimonialHerMoney from "./pages/TestimonialHerMoney";
import SyaketenPage from "./pages/SyaketenPage";
import FaqPageHerMoney from "./pages/FaqPageHerMoney";
import FooterHerMoney from "./components/FooterHerMoney";

function App() {
  return (
    <div>
      <NavbarHerMoney />

      <Routes>
        <Route path="/" Component={HomepageHerMoney} />
        <Route path="/kelas" Component={KelasHerMoney} />
        <Route path="/testimonial" Component={TestimonialHerMoney} />
        <Route path="/faq" Component={FaqPageHerMoney} />
        <Route path="/syaratketentuan" Component={SyaketenPage} />
      </Routes>

      <FooterHerMoney />
    </div>
  );
};

export default App;
