import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { increment, decrement } from '../redux/slices/exampleSlice';
import '../assets/styles/main.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.example.value);

  return (
    <div className="App">
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;