
function ShowProject(project: any) {
    return (<>
        <pre>{JSON.stringify(project, null, ' ')}</pre>
    </>);
}

export default ShowProject;
