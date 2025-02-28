import { BrowserRouter, Route, Routes } from "react-router";
import {
  NavbarApp,
  HomePage,
  RegisterPage,
  LoginPage,
  CartPage,
  PizzaPage,
  ProfilePage,
  NotFoundPage,
  Footer,
} from "./page/index";

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
