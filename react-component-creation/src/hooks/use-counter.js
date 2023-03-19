import { useState, useEffect} from 'react';

function useCounter(initialCount){

    // copy paste all lines related to that piece of state 
    const [count, setCount ] = useState(initialCount);
    
    useEffect(()=> {
        console.log(count);
    }, [count]);

    const increment = ()=> {
        setCount(count + 1);
    }

    return {
        count,
        increment
    };

};

export default useCounter;