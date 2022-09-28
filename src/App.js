import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Blogdetail from "./pages/Blogdetail";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Servicedetail from "./pages/Servicedetail";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Service" element={<Service />} />
          <Route path="Servicedetail/:id"   element={<Servicedetail />} />
          <Route path="About" element={<About />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="blogdetails/:id" element={<Blogdetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);