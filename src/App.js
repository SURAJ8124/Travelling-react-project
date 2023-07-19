import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Contact from "./components/Contact";


export default function App() {
  return (
   
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
      
  );
}
