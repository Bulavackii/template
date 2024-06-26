// components/Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;