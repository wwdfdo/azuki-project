import React from "react";
import Header from "./Header";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="bg-black text-white font-normal">
      <Header />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
