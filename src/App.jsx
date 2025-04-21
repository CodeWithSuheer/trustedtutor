import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { Toaster } from "react-hot-toast";

// Internal modules/components
import ScrollToTop from "./utils/helpers/scroll-to-top";

// Pages
import HomePage from "./pages/home/homePage";
import AboutPage from "./pages/about/aboutPage";
import ContactPage from "./pages/contact/contactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Components
import Header from "./layout/Header";
import HeaderMobile from "./layout/HeaderMobile";
import Footer from "./layout/Footer";
import NotFound from "./components/NotFound";
import WhatsappButton from "./components/whatsappButton";

// Styles
import "./App.css";


function App() {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  const onLoad = () => {
    // console.log('onLoad works!');
  };


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <TawkMessengerReact
          propertyId="67f158f128d94b190fb2b6ee"
          widgetId="1io3c6sf9"
          ref={tawkMessengerRef}
          onLoad={onLoad}
        />

        {window.innerWidth >= 768 ? <Header /> : <HeaderMobile />}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        <WhatsappButton />

        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
