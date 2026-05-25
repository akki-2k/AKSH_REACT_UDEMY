import React from "react";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
