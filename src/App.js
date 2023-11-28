import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import pages
import Home from "./pages/home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";

// import utils components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const actifPage = useLocation();
  return (
    <div className="App">
      <Header pathname={actifPage.pathname} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Housing/:id" element={<Housing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
