import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="game/:id" element={<h1>Game detail page</h1>}></Route>
          <Route path="games/:type" element={<h1>Games list page</h1>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
