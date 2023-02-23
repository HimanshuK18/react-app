import './App.css';
import { Link } from "react-router-dom";
import { ProjectsPage, ProjectsPropsType } from './projects/ProjectsPage';
import Clock from './projects/Clock';
import { useState } from 'react';
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
              <Link to="/" aria-label='this home'>Home</Link>
            </li>
            <li>
              <Link to="/blogs" aria-label='this is blogs'>Blogs</Link>
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
            <li>
              <Link to="/clildren">Clihdren</Link>
            </li>
            <li>
              <Link to="/cats">Form cates</Link>
            </li>
          </ul>
        </nav>
        <h1>Hello, React!</h1>
        <UserContext.Provider value={user}>
          <ProjectsPage name={data.name} hobbies={data.hobbies} >
            <div>{true}</div>
            <div>{true}</div>
            </ProjectsPage>
        </UserContext.Provider>
      </div></>
  );
}

export default App;

//https://handsonreact.com/docs/labs/react-tutorial-typescript