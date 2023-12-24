import './App.css';
import Survey from './Components/Survey/Survey';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResultPage from './ResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Survey />} exact/>
          <Route path='/Result' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
