import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../components/Products';

export default function Cart() {
    const {cart:{items},auth:{logged}} = useSelector(state=>state)
    return <>
        <section>
            {logged?<Products products={items}></Products>:
            <p>Inicia sesión para agregar al carrito</p>
            }
        </section>
    </>;
}