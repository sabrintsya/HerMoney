import { Routes, Route } from "react-router-dom";
import HomepageHerMoney from "./pages/HomepageHerMoney";
import KelasHerMoney from "./pages/KelasHerMoney";
import TestimonialHerMoney from "./pages/TestimonialHerMoney";
import SyaketenPage from "./pages/SyaketenPage";
import FaqPageHerMoney from "./pages/FaqPageHerMoney";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomepageHerMoney} />
        <Route path="/kelas" Component={KelasHerMoney} />
        <Route path="/testimonial" Component={TestimonialHerMoney} />
        <Route path="/faq" Component={FaqPageHerMoney} />
        <Route path="/syaratketentuan" Component={SyaketenPage} />
      </Routes>
    </div>
  );
};

export default App;
