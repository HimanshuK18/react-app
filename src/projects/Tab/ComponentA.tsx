  import React from 'react';

  interface Props {
    name: string;
  }
  
  interface State {
    count: number;
  }


  class ComponentA extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
  
      this.state = {
        count: 0,
      };
    }
  
    handleClick = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      return (
        <div>
          <h1>Hello, I am Component A {this.props.name}!</h1>
          <p>You clicked {this.state.count} times.</p>
          <button onClick={this.handleClick}>Click me</button>
        </div>
      );
    }
  }
  
  export default ComponentA;
