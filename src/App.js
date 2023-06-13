import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

import "./App.css";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
      {/* <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes> */}
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
