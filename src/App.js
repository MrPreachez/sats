import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import MembershipPage from "./pages/MembershipPage/MembershipPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import MemberForm from "./pages/MemberForm/MemberForm";
import DonateForm from "./pages/DonateForm/DonateForm";
import BusinessForm from "./pages/BusinessForm/BusinessForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import React from "react";

function App() {
  const aboutSectionRef = useRef(null);
  const newsSectionRef = useRef(null);
  const headerMenuRef = useRef(null);
  const memberTopRef = useRef(null);
  const donateSectionRef = useRef(null);
  const memberFormTopRef = useRef();
  const businessFormTopRef = useRef();
  const homeTopRef = useRef();
  const donateFormTopRef = useRef();

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          aboutSectionRef={aboutSectionRef}
          newsSectionRef={newsSectionRef}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                homeTopRef ={homeTopRef}
                aboutSectionRef={aboutSectionRef}
                newsSectionRef={newsSectionRef}
                headerMenuRef={headerMenuRef}
                memberTopRef={memberTopRef}
                donateSectionRef={donateSectionRef}
              />
            }
          />
          <Route
            path="/membership"
            element={
              <MembershipPage
                memberTopRef={memberTopRef}
                donateSectionRef={donateSectionRef}
                memberFormTopRef={memberFormTopRef}
                businessFormTopRef={businessFormTopRef}
                donateFormTopRef={donateFormTopRef}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/memberform"
            element={<MemberForm memberFormTopRef={memberFormTopRef} homeTopRef={homeTopRef} />}
          />
          <Route
            path="/businessform"
            element={<BusinessForm businessFormTopRef={businessFormTopRef} homeTopRef={homeTopRef} />}
          />
          <Route path="/donateform" element={<DonateForm donateFormTopRef={donateFormTopRef}/>} />
        </Routes>
        <Footer
          aboutSectionRef={aboutSectionRef}
          newsSectionRef={newsSectionRef}
          memberTopRef={memberTopRef}
          donateSectionRef={donateSectionRef}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
