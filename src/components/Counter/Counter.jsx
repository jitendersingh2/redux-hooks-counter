import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from '../../actions/const';
import './Counter.css';

const Counter = props => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div className="Counter-Container">
            <div className="Count-Label">Count: <span className="">{count}</span></div>
            <button className="Counter-Btn" onClick={() => dispatch({ type: INCREMENT })}>+</button>
            <button className="Counter-Btn" onClick={() => dispatch({ type: DECREMENT })}>-</button>
        </div>
    );
}

export default Counter;
