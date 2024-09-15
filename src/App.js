import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./pages/feed";
import CategoriesPage from "./pages/categories";
import OngPage from "./pages/ongPage"; 
import Footer from "./components/footer";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/categories/:category" element={<CategoriesPage />} />
            <Route path="/ong/:id" element={<OngPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;