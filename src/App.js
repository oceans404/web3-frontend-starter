import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

import "./App.css";
import { HomePage } from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  const [currentAddress, setCurrentAddress] = useState(null);
  useEffect(() => {
    async function fetchConnectedAccount() {
      const x = await window.ethereum.request({ method: "eth_accounts" });
      setCurrentAddress(x && x[0]);
    }
    fetchConnectedAccount();
    listenToAccountsChange();
  }, []);

  function listenToAccountsChange() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setCurrentAddress(accounts[0]);
        } else {
          setCurrentAddress(null);
        }
      });
    }
  }
  const accountProps = { currentAddress };
  return (
    <div className="App">
      <NavBar />
      <Box sx={{ paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<HomePage accountProps={accountProps} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Box>
    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>About</h2>
        <p>
          This is a frontend starter for Polygon projects by Steph aka{" "}
          <a
            href="https://twitter.com/0ceans404"
            target="_blank"
            rel="noreferrer"
          >
            @0ceans404
          </a>
        </p>
      </main>
    </>
  );
}

function Contact() {
  return (
    <>
      <main>
        <h2>Contact</h2>
        <p>
          Want to know more? Contact me!{" "}
          <a
            href="https://twitter.com/0ceans404"
            target="_blank"
            rel="noreferrer"
          >
            @0ceans404
          </a>
        </p>
      </main>
    </>
  );
}

export default App;
