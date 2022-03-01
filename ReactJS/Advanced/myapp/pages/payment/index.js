import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementTotal, pay, reduceTotal } from '../../features/Ejemplo';

export default function Payment() {
    const { total, loading, error, success, data } = useSelector(state => state.payment)
    const dispatch = useDispatch()
    return <div>
        {loading && <p className='bg-green-400 p-3 text-white'>Loading...</p>}
        <p>{total}</p>
        {error && <p>Ha ocurrido un error {data.message}</p>}
        {success && <p>Exito!!! {data.total} {data.name}</p>}

        <button onClick={() => { dispatch(incrementTotal()) }}>Add</button>
        <button onClick={() => { dispatch(increment(5)) }}>Add 5</button>
        <button onClick={() => { dispatch(reduceTotal()) }}>Sub</button>
        <button onClick={() => { dispatch(pay({ total: total, name: "Tzuzul" })) }}>Pagar</button>
    </div>;
}