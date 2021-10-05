import React, { Fragment , useState} from 'react'


const ContadorCarta= () => {

const [number, setNumber] = useState(0);
const increment = () =>setNumber(number + 1);
let decrement= () => setNumber(number -1);

    return (
        <Fragment>
       <button onClick={decrement} className="btn btn-warning btn-sm">-</button>
                <h3>{number}</h3>
                <button onClick={increment} className="btn btn-warning btn-sm">+</button>

                </Fragment>
    )
}

export default ContadorCarta
