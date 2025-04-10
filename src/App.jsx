import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { Toaster } from "react-hot-toast";
// Styles
import "./App.css";

// Components
import ScrollToTop from "./utils/scroll-to-top";
import WhatsappButton from "./components/whatsappButton";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import NotFound from "./sections/NotFound";
import HomePage from "./pages/home/homePage";
import AboutPage from "./pages/about/aboutPage";
import ContactPage from "./pages/contact/contactPage";


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

        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <WhatsappButton />

        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
