import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import PentaKuhl from "./pages/PentaKuhl";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white relative">
        {/* Sticky Vertical Logo on Left */}
        <div className="fixed left-0 top-[25%] z-40 block pointer-events-none">
          <img 
            src="/Home_page/penta-sticky.png" 
            alt="Penta Freight" 
            className="w-[24px] md:w-[32px] h-auto pointer-events-auto shadow-md"
          />
        </div>

        {/* Navigation Bar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/pentakuhl" element={<PentaKuhl />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
