import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<h1>Hello World 2</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
