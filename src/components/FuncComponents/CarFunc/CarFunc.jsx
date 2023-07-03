import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

const CarFunc = (props) => {
  const { users } = props;
  const [ state, setState ] = useState({
    brand: 'Mercedes',
    year: 2022,
    color: 'black',
    model: 'GLE 43',
    count: 0
  });

  let interval;

  const handleChangeYear = () => {
    setState((prevState) => ({
      ...prevState,
      year: prevState.year - 1
    }));
  };

  const increaseCount = ()=> {
    interval = setInterval(()=>{
      console.log(state.count);
      setState((prevState) => ({
        ...prevState,
        count: prevState.count + 1
      }));
    }, 1000)
  }

  useEffect(() => {
      console.log('first render');
      increaseCount()

    return ()=> {
      console.log('Unmount');
      clearInterval(interval)
    }
  }, []);

  useEffect(() => {
    console.log('Update');
  });

  useEffect(() => {
    console.log('Update by dependency');
  },[state.year]);

    useEffect(() => {
      console.log('Received users');
    },[users]);

  // console.log(state);
  return (
    <div>
      <h3>I have {state.brand}</h3>
      <h3>It's {state.color}</h3>
      <h3>The model is {state.model}</h3>
      <h3>{state.year}</h3>
      <h3>{state.count}</h3>
      <button type="button" onClick={handleChangeYear}>
        Change year
      </button>
    </div>
  );
};

export default CarFunc;
