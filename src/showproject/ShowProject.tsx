import { useState, createContext, useContext } from "react";
import { UserContext } from '../projects/Context';
function ShowProject(project: any) {
    const user = useContext(UserContext);
    return (<>
    <h2>{`Hello ${user} again!`}</h2>
        <pre>{JSON.stringify(project, null, ' ')}</pre>
    </>);
}

export default ShowProject;
