import Layout from './components/Layout';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>

      </Routes>
    </>
  );
}
