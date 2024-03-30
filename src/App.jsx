import "../src/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ours from "./pages/Ours";
import Pairs from "./pages/Pairs";
import Story from "./pages/Story";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="Navbar">
          <h2>logo</h2>
        </div>

        <div className="hero">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Ours />}></Route>
              <Route path="/Pairs" element={<Pairs />}></Route>
              <Route path="/Story" element={<Story />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
