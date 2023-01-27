import './App.css';
import { Outlet, Link } from "react-router-dom";
import { ProjectsPage, ProjectsPropsType } from './projects/ProjectsPage';
// start again from https://handsonreact.com/docs/lists, and hooks in w3schools
function App() {
  const data: ProjectsPropsType = {
    name: "Himanshu",
    hobbies: "Hiking"
  };
  return (
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
        </ul>
      </nav>
      <h1>Hello, React!</h1>
      <ProjectsPage name={data.name} hobbies={data.hobbies} />
    </div>
  );
}

export default App;

//https://handsonreact.com/docs/labs/react-tutorial-typescript