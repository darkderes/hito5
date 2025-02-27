// import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import LoginPage from "./page/LoginPage";
import NavbarApp from "./components/Navbar";
import HomePage from "./page/HomePage";
import RegisterPage from "./page/RegisterPage";
import CartPage from "./page/CartPage";
import PizzaPage from "./page/PizzaPage";
import ProfilePage from "./page/ProfilePage";
import NotFoundPage from "./page/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarApp />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/Pizza/p001" element={<PizzaPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />

          {/* <Pizza /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
