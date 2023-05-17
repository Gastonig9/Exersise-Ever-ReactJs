import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ExcersisePageIndex from './pages/ExcersisePageIndex/ExcersisePageIndex';
import ExcersiseRoutine from './pages/ExcersiseRoutine/ExcersiseRoutine';
import { ExersiseProvider } from './context/contextFile';
// import { exportData } from './services/firebase';

function App() {
  return (
    <div className="App">
      {/* <button onClick={exportData}>export</button> */}
      <ExersiseProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ExcersisePageIndex />}></Route>
            <Route path='begin' element={<ExcersiseRoutine />}></Route>
          </Routes>
        </BrowserRouter>
      </ExersiseProvider>
    </div>
  );
}

export default App;
