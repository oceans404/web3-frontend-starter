import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

import "./App.css";
import { HomePage } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
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

export default App;
