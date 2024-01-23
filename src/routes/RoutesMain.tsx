import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MainContext } from "../provider/MainContext";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";

export const RoutesMain = () => {
  const { NavbarDrawerRef, NavbarElementRef } = useContext(MainContext);
  const location = useLocation();

  useEffect(() => {
    if (NavbarDrawerRef.current) {
      NavbarDrawerRef.current.checked = false;
    }
    NavbarElementRef.current?.classList.toggle(
      "hidden",
      location.pathname === "/contact"
    );
  }, [location]);

  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Navbar>
  );
};
