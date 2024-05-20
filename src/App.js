import "./App.css";
// import Counter from "./component/Counter";
// import Todo from "./component/Todo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Router>
      <div className="App">
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
              Home
            </Typography>
            <Typography variant="h6" component={Link} to="/about" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
              About
            </Typography>
            <Typography variant="h6" component={Link} to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              Contact
            </Typography>
            <Typography variant="h6" component={Link} to="/login" style={{ textDecoration: 'none', color: 'inherit',marginLeft:'78%' }}>
              Login
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
