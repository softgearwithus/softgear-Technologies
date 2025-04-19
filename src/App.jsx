import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./NoPage";
import Home from "./Home";
import Layout from "./Layout";
import About from "./components/About";
import Internship from "./components/Internship";
import InternshipContact from "./pages/InternshipContact";
import Blogs from "./pages/Blog";
function App() {
  return <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/internship" element={<Internship/>}/>
          <Route path="/intern-contactForm" element={<InternshipContact/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>;
}

export default App;
