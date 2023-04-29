import { Routes, Route } from "react-router-dom";
import { ColourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import HackathonList from "./scenes/hackathonLists";
import Hackathon1 from "./scenes/hackathon1";
import Hackathon2 from "./scenes/hackathon2";
import React from "react";

function App() {
  const [theme, colourMode] = useMode();
  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            {/* Use React Routes to Manage the Pages*/}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/hackthon1" element={<Hackathon1 />} />
              <Route path="/hackthon2" element={<Hackathon2 />} />
              <Route path="/hackathonLists" element={<HackathonList />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;
