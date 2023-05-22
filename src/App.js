import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ExcersisePageIndex from './pages/ExcersisePageIndex/ExcersisePageIndex';
import ExcersiseRoutine from './pages/ExcersiseRoutine/ExcersiseRoutine';
import { ExersiseProvider } from './context/contextFile';
import CanEatPage from './pages/CanEatPage/CanEatPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
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
            <Route path='/begin' element={<ExcersiseRoutine />}></Route>
            <Route path='/caneat' element={<CanEatPage/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ExersiseProvider>
    </div>
  );
}

export default App;
