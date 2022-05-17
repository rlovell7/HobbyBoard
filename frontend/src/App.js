import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import New from "./pages/New";
import AllProjects from "./pages/AllProjects";
import ProjectDetails from "./pages/ProjectDetails";
import NavBar from "./components/common/NavBar";
import TopBarM from "./components/common/TopBarM";
import BackButton from "./components/common/BackButton";
import UserSignup from "./pages/UserSignup";
import UserSignIn from "./pages/UserSignIn";
import NewProject from "./components/NewProjects";

function App() {
  const [res, setRes] = useState("Loading...");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const testQuery = async () => {
      const response = await axios.get(URL);
      setRes(response.data);
    };

    testQuery();
  }, [URL]);

  return (
    <div className="App">
      <main>
        <TopBarM />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <header className="App-header">
                <Link to="/projects">
                  <p>All Project</p>
                </Link>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Here is our database call = {res}</p>
              </header>
            }
          />
          <Route path="/signIn" element={<UserSignIn/>}/>
          <Route path="/signup" element={<UserSignup/>}/>
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:pid" element={<ProjectDetails />} />
          <Route path="/projects/new" element={<NewProject/>} />
        </Routes>
        <NavBar />
      </main>
    </div>
  );
}

export default App;
