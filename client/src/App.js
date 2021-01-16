import './App.css';
import Auth from './views/Auth';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
