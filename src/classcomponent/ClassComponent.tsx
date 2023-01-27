import React from 'react';

class ClassComponent extends React.Component<{ namec: string, hobbiesc: string }> {
    render() {
        return <h1>
            Hello I am class component: , {this.props.namec} and {this.props.hobbiesc}</h1>;
    }
}

export default ClassComponent;