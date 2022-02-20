import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../redux/actions';

export const Counter = () => {
    const count = useSelector((state) => state.count );
    const dispatch = useDispatch();
    console.log("counter");
  return (
    <div>
        <button onClick={()=> dispatch(Actions.counterActions.increaseCount(50))}>Increase</button>
        <button   onClick={()=> dispatch(Actions.counterActions.decreaseCount(50))}>Decrease</button>
        { count}
    </div>
  )
}


