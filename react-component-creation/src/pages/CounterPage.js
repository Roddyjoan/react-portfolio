import produce from 'immer';
import { useReducer, useState } from 'react';
import Button from '../components/Button.js';
import Panel from '../components/Panel.js';

const reducer = (state, action) => {
    //
    if (action.type === 'increment') {
            state.count=state.count + 1;
    }
    if (action.type === 'change-value-to-add') {
            state.valueToAdd= action.payload;
        
    }

    if (action.type === 'decrement') {
       state.count = state.count -1;
    }

    if (action.type === 'add-value-to-count'){
            state.count= state.count + state.valueToAdd;
            state.valueToAdd = 0
    }

    return state;

};


function CounterPage({ initialCount }) {

    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    })


    const increment = () => {
        // setCount(count + 1);
        dispatch({
            type: 'increment'
        });
    };

    const decrement = () => {
        if (state.count > 0) {
            dispatch({
                type: 'decrement'
            })
        }
    }


    const handleChange = (e) => {
        console.log(state)
        const value = parseInt(e.target.value) || 0;
        
        dispatch({
            type: 'change-value-to-add',
            payload: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch({
            type: 'add-value-to-count'

        })
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    }


    return (
        <Panel className='m-3'>
            <h1 className='text-lg'> Count is {state.count} </h1>
            <div className='flex flex-row'>
                <Button onClick={increment} > Increment</Button >
                <Button onClick={decrement} > Decrement</Button >
            </div>

            <form onSubmit={handleSubmit}>
                <label> Add a lot!</label>
                <input
                    type="number"
                    className='p-1 m-3 bg-gray-50 border border-gray-300'
                    onChange={handleChange} value={state.valueToAdd || ''} />
                <Button>Add it</Button>
            </form>
        </Panel>
    );

}

export default CounterPage;