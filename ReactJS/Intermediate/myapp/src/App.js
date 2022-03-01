import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fundamentos from "./pages/Fundamentos";
import GotAPI from "./pages/GotAPI";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Login from "./pages/Login";
import { themeContext } from "./context/ThemeContext";
import LoginState from "./pages/LoginState";

function App() {
  const { theme, changeTheme } = useContext(themeContext);

  return (
    <>
      <div className={theme ? "main__dark" : "main__light"}>
        <header>header</header>
        <main className={`page`}>
          <button
            onClick={() => {
              changeTheme();
            }}
          >
            Claro/Oscuro
          </button>
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/" element={<Fundamentos />}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/loginstate" element={<LoginState />} />
              <Route path="/home2" element={<Home2 />} />
              <Route path="/fundamentos" element={<Fundamentos />} />
              <Route path="/got" element={<GotAPI />}></Route>
            </Routes>
          </BrowserRouter>
        </main>
        <footer>footer</footer>
      </div>
    </>
  );
}

export default App;
