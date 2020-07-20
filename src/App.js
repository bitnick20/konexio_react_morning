import React from 'react';
import Counter from './components/Counter';
import './App.css';


class App extends React.Component {

  constructor (props) {
    super (props);

    this.incrementCount = this.incrementCount.bind(this);

    this.state = {
      count: 1,
    };
  }
  
  
  incrementCount = () => {
    console.log("Je fais un test pour afficher ce message");
    this.setState({
      count: this.state.count +1})
  }

  decrementCount = () => {
    console.log("Je fais un autre test pour voir")
    this.setState({
      count: this.state.count -1})
  }
  

  render () {
    return (
      <div>
        <h1 >Counter</h1>
        {/* <h2>{this.state.count}</h2> */}
        {/* <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button> */}
        <Counter incrementFn={this.incrementCount} 
        decrementFn={this.decrementCount} 
        count={this.state.count}/>
      </div>
    );
  }
}

export default App;
