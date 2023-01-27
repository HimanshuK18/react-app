import { MOCK_PROJECTS } from './MockProjects';
import './ProjectPage.css';
import ShowProject from '../showproject/ShowProject';
import ClassComponent from '../classcomponent/ClassComponent';

type ProjectsPropsType = {
    name: string,
    hobbies: string
};

function ProjectsPage({ name, hobbies }: ProjectsPropsType) {
    let passProps = {
        namec: "My Name",
        hobbiesc: " Play"
    };
    const shoot = (data: string, event: any) => {
        alert('yes shoot' + data)
    }

    return (<>
        <ClassComponent   {...passProps} />
        <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
        <h1 className='headername'>{name}, {hobbies}</h1>
        <h1>Projects</h1>
        <ul>
        {MOCK_PROJECTS.map((project) => <ShowProject projectname={project} />)}
      </ul>
    </>);
}

export { ProjectsPage };
export type { ProjectsPropsType };
