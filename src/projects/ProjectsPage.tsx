import { useState } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import './ProjectPage.css';
import ShowProject from '../showproject/ShowProject';
import ClassComponent from '../classcomponent/ClassComponent';
import { Children } from 'react';
import { PropsWithChildren } from 'react';

type ProjectsPropsType = {
    name: string,
    hobbies: string
};

function ProjectsPage(props: PropsWithChildren<ProjectsPropsType>) {
    let passProps = {
        namec: "My Name",
        hobbiesc: " Play"
    };
    const shoot = (data: string, event: any) => {
        alert('yes shoot' + data)
    }
    const [count, setCount] = useState(22);
   // The array destructuring syntax lets us give different names to the state variables we 
   //declared by calling useState. These names aren’t a part of the useState API. Instead, 
   //React assumes that if you call useState many times, you do it in the same order during every render



    return (<>
        <ClassComponent   {...passProps} />
        <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>

        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Count State</button>

        <h1 className='headername'>{props.name}, {props.hobbies}</h1>
        <h1>Projects</h1>
        <ul>
            {MOCK_PROJECTS.map((project) => <ShowProject projectname={project} />)}
        </ul>
        <h1>Total clildren: {Children.count(props.children)}</h1>
    </>);
}

export { ProjectsPage };
export type { ProjectsPropsType };
