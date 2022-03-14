import React from "react";
import { Header } from "./";
import { Footer } from "./";

export const Layout = ({ children }) => {
  return (
    <div className="content-all">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};
