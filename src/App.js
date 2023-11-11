import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/layout";
import Home from "./pages/home";
import Crowdfunder from "./pages/crowdfunder";
import Accounts from "./pages/accounts";
import Rewards from "./pages/rewards";
import Transaction from "./pages/transactions";
import Signin from "./pages/signin";
import Nopage from "./pages/nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
