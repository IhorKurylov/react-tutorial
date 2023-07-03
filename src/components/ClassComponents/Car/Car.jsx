import React from 'react';
import { set } from 'react-hook-form';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Mercedes',
      year: 2022,
      color: 'black',
      model: 'GLE 43',
      count: 0
    }
  }

  handleChangeYear = () => {
    this.setState(
      {year: this.state.year - 1 }
    )
  }

  increaseCount = ()=> {
    this.interval = setInterval(()=>{
      console.log(this.state.count);
      this.setState(
        {count: this.state.count + 1 }
      )
    }, 1000)
  }


  componentDidMount(){
    console.log('first render');
    this.increaseCount()
  }

  componentDidUpdate() {
    console.log('Update');
  }

  componentWillUnmount() {
    console.log('Unmount');
    clearInterval(this.interval)
  }


  render(){
    console.log(this.state);

    return(
      <div>
        <h3>I have {this.state.brand}</h3>
        <h3>It's {this.state.color}</h3>
        <h3>The model is {this.state.model}</h3>
        <h3>{this.state.year}</h3>
        <h3>{this.state.count}</h3>
        <button type='button' onClick={this.handleChangeYear}>
          Change year
        </button>
      </div>
    )
  }
}

export default Car;
