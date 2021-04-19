import React, {useState} from 'react';

function Stepper() {
    const [count, setCount] = useState(0)

    const addStepper = () => {
        setCount(count + 1)
    }

    const subtractStepper = () => {
        setCount(count - 1)
    }

    return(
        <div className="stepper">
            <button onClick={subtractStepper}>-</button>
            <p>{count}</p>
            <button onClick={addStepper}>+</button>
        </div>
    )
}

export default Stepper