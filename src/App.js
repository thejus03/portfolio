import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/projects"
import Education from "./pages/education"
import Work from "./pages/work"
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
