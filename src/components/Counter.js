import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    //metodo 1
    function handleDecreaseCounter() {
        setCounter(counter -1);

    }

    function handleIncreaseCounter() {
        setCounter(counter + 1);
    }

    //metodo 2
    const hanleChangeCounter = (value)=>{
        setCounter(counter + value )
    }

    return (
        <div>
            <h1>Counter</h1>
           <button onClick={() => hanleChangeCounter(-1)}>Anterio usuario</button>{counter} <button onClick={ () => hanleChangeCounter (1)}>Siguiente usuario</button>
        </div>
    );
};

export default Counter;
