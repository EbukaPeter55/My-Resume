// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Resume from './pages/Resume.component';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Resume/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
