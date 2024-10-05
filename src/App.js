
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './Components/Form';
import Results from './Components/Results'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/react-routing-navigation/results' element={<Results/>} />
        <Route path='/react-routing-navigation/' element={<Form />} />
      </Routes>
      
    </div>
  );
}

export default App;
