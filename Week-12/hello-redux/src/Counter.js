import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    const addCounter = () => {
        setCount(count + 1)
    }

    const subtractCounter = () => {
        setCount(count - 1)
    }

    return(
        <div className="counter">
            <button onClick={subtractCounter}>-</button>
            <p>{count}</p>
            <button onClick={addCounter}>+</button>
        </div>
    )
}

export default Counter