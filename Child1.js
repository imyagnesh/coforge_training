import React, { PureComponent } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class Child1 extends PureComponent {
  state = {
    i: 1,
  };

  mouseMove() {
    console.log('mouse moved');
  }

  componentDidMount() {
    // document.addEventListener('mousemove', this.mouseMove);
    // this.interval = setInterval(() => {
    //   console.log('hello');
    // }, 1000);
  }

  componentWillUnmount() {
    // document.removeEventListener(
    //   'mousemove',
    //   this.mouseMove,
    // );
    // clearInterval(this.interval);
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //   }

  increment = () => {
    this.setState({
      i: this.state.i + [],
    });
  };

  render() {
    console.log('Child 1');
    const { i } = this.state;
    // if (i > 5) {
    //   throw new Error('Error from child 1');
    // }
    return (
      <div>
        <h1>{i}</h1>
        <button type="button" onClick={this.increment}>
          Child Increment
        </button>
      </div>
    );
  }
}
