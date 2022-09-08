import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import CreateData from './Component/Home/CreateData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createData" element={<CreateData />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
