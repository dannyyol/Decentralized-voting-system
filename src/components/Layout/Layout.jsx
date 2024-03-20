import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout(props) {
  return (
    <div>
      <Navbar isConnected={props.isConnected} isAdmin={props.isAdmin} electionStarted={props.electionStarted} />
      {props.children}
      <Footer />
    </div>
  );
}
