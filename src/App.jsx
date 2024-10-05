import { Routes, Route } from "react-router-dom";
import HomepageHerMoney from "./pages/HomepageHerMoney";
import KelasHerMoney from "./pages/KelasHerMoney";
import TestimonialHerMoney from "./pages/TestimonialHerMoney";
import FaqHerMoney from "./components/FaqHerMoney";
import SyaketenPage from "./pages/SyaketenPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomepageHerMoney} />
      </Routes>
    </div>
  );
};

export default App;
