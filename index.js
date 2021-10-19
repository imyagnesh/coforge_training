/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Child1 from './Child1';
import Child2 from './Child2';
import './style.css';

// React
// 1. Component Name must start with Capital letter
// 2. From one component only return one html element
// 3. Inline Style should be applied as a object and parameters must be in camelcase
// 4. class should be replace with className

// Function Component
// const App = ({ name, designation }) => (
//   <>
//     <h1
//       style={{
//         backgroundColor: 'red',
//       }}
//     >
//       {name}
//     </h1>
//     <h2 className="heading">{designation}</h2>
//     <div
//       style={{
//         backgroundColor: 'green',
//         height: 10,
//         width: 10,
//       }}
//     />
//     {/* <input type="checkbox" /> */}
//   </>
// );

// Life Cycle Method

// 1. Mounting

// -> constructor -> Not Possible
// -> getDerivedStateFromProps
// -> render
// -> componentDidMount

// 2. Updating

// -> getDerivedStateFromProps
// -> shouldComponentUpdate
// -> render
// -> getSnapshotBeforeUpdate -> Not possible
// -> componentDidUpdate

// 3. Unmount
// -> componentWillUnmount

// 4. Error
// -> getDerivedStateFromError -> Not Possible
// -> componentDidCatch -> Not Possible

// let a = 1;

class App extends Component {
  state = {
    a: 1,
    data: [],
    hasError: false,
  };

  // Call only once
  constructor(params) {
    super(params);
    console.log('constructor');
    // Temperary varible
    // In Order to update UI We need state
    // this.state = {
    //   a: 1,
    //   // greet: `Hello ${params.name}`,
    // };
    // this.increment = this.increment.bind(this);

    // Analytics purpose we can use constructor

    // Never set a state using API Response
  }

  static getDerivedStateFromProps(props, state) {
    return {
      greet: `Hello, ${props.name}`,
    };
  }

  increment = () => {
    this.setState({
      a: this.state.a + 1,
    });
  };

  componentDidMount() {
    console.log(document.getElementById('title'));
    document.getElementById('title').style = 'color:red';

    document.addEventListener('copy', () => {
      console.log('copied');
    });

    // Load Data from Api
    // Api Call -> response -> set a state value
    // this.setState({
    //   data: [],
    // });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 'hello';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // Error Analytics
    //  API call
    //
  }

  render() {
    console.log('render');
    const { name, designation } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Please try after some time</h1>;
    }

    return (
      <>
        <h1 id="title">{name}</h1>
        <h1>{designation}</h1>
        <h2>{this.state.a}</h2>
        <h2>{this.state.greet}</h2>
        {this.state.a < 10 && <Child1 />}

        <Child2 />
        {/* <h2>{this.state.greet}</h2> */}
        <button type="button" onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

ReactDOM.render(
  <App name="Rohit" designation="Cricketor" />,
  document.getElementById('root'),
);
