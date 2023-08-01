import './App.css';
import { Link } from "react-router-dom";
import { ProjectsPage, ProjectsPropsType } from './projects/ProjectsPage';
import Clock from './projects/Clock';
import { useState, Profiler  } from 'react';
import { UserContext } from './projects/Context';
// start again from https://handsonreact.com/docs/lists, and hooks in w3schools
function App() {
  const data: ProjectsPropsType = {
    name: "Himanshu",
    hobbies: "Hiking"
  };
  function onRenderCallback(
    id: any, // the "id" prop of the Profiler tree that has just committed
    phase: any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration: any, // time spent rendering the committed update
    baseDuration: any, // estimated time to render the entire subtree without memoization
    startTime: any, // when React began rendering this update
    commitTime: any, // when React committed this update
    interactions: any // the Set of interactions belonging to this update
  ) {
    console.log(`${id} [${phase}] took ${actualDuration} ms`);
  }

  const [user, setUser] = useState("Jesse Hall");
  return (<Profiler id="my-component" onRender={onRenderCallback}>
    <>
      <h5>I am Clock <Clock /></h5>
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
            <li>
              <Link to="/tab">Tabs Children</Link>
            </li>
            <li>
              <Link to="/tab2">Tabs Import</Link>
            </li>
            <li>
              <Link to="/tabs">Dynamic Import</Link>
            </li>
            <li>
              <Link to="/reducer">State Reducer</Link>
            </li>
            <li>
              <Link to="/reducerredux">Redux Reducer</Link>
            </li>
            <li>
              <Link to="/memorized">Memorized</Link>
            </li>
            <li>
              <Link to="/Responsive">Responsive</Link>
            </li>
            <li>
              <Link to="/createlist">Create List</Link>
            </li>
            <li>
              <Link to="/grid">Grid</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/maps">Map Notes</Link>
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
      </Profiler> );
}

export default App;

//https://handsonreact.com/docs/labs/react-tutorial-typescript