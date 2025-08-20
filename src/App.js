import { Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "./Componant/Common/Layout/Layout";
import LanguageHandler from "./Componant/language-selector";
import SubscriptionPurchase from "./Pages/SubscriptionPurchase/SubscriptionPurchase";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import LoginEntry from "./Pages/LoginEntry/LoginEntry";

function App() {
  const { i18n } = useTranslation();

  return (
    <div className="App" key={i18n.language}>
      <LanguageHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={'/he/login'} />} />
          <Route path="/:lang/*" element={
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="login-entry" element={<LoginEntry />} />
              <Route path="subscription-purchase" element={<SubscriptionPurchase />} />
              <Route path="*" element={<Navigate to={`/${i18n.language}/login`} />} />
            </Routes>
          } />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;

