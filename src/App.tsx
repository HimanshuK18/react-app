import './App.css';
import { Outlet, Link } from "react-router-dom";
import { ProjectsPage, ProjectsPropsType } from './projects/ProjectsPage';
import Clock from './projects/Clock';
import { createContext, useState } from 'react';
import { UserContext } from './projects/Context';
// start again from https://handsonreact.com/docs/lists, and hooks in w3schools
function App() {
  const data: ProjectsPropsType = {
    name: "Himanshu",
    hobbies: "Hiking"
  };
  const [user, setUser] = useState("Jesse Hall");
  return (
    <>
      <h1>I am Clock <Clock /></h1>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/lift">Lift</Link>
            </li>
            <li>
              <Link to="/effect">Use Effect</Link>
            </li>
          </ul>
        </nav>
        <h1>Hello, React!</h1>
        <UserContext.Provider value={user}>
          <ProjectsPage name={data.name} hobbies={data.hobbies} />
        </UserContext.Provider>
      </div></>
  );
}

export default App;

//https://handsonreact.com/docs/labs/react-tutorial-typescript