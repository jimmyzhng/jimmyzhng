import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} ></Route>
      </Routes>
    </>
  );
}

export default App;
