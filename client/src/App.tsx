import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import Signup from "./scenes/signup/Signup";
import Login from "./scenes/login/Login";
import ContactUs from "./scenes/contactus/ContactUs";
import Services from "./scenes/services/Services";
import Gallery from "./scenes/gallery/Gallery";
import CreateEvent from "./scenes/createevent/CreateEvent";
import AccountDashboard from "./scenes/AccountInformation/accoundashboard/accountdashboard";
import Heading from "./scenes/AccountInformation/Heading /heading";
import AccountDashboardSideNav from "./scenes/AccountInformation/AccDashboardSideNav/accountdashboardsidenav";
import AccountDashboardTabs from "./scenes/AccountInformation/AccDashboardTabs/accountdashboardtabs";
import Location from "./scenes/createevent/Location";
import Catering from "./scenes/createevent/Catering";
import Theme from "./scenes/createevent/Theme";
import Date from "./scenes/createevent/Date";
import OccasionConfirmed from "./scenes/createevent/OccasionConfirmed";


const App: React.FC = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Gallery />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/location" element={<Location />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/date" element={<Date />} />
          <Route path="/occasion-confirmed" element={<OccasionConfirmed />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account-dashboard" element={<AccountDashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
