import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import CreateData from './Component/Home/CreateData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditData from './Component/Home/EditData';

function App() {
  return (
    <div>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createData" element={<CreateData />} />
      <Route path="/editData/:dataId" element={<EditData />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
