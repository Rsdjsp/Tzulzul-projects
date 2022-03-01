import React from 'react';
import axios from 'axios'
import Products from '../../components/Products';

export async function getServerSideProps({ req }) {
    // Lunes: Una solución a este problema
    const { data: products } = await axios.get(`http://${req.headers.host}/api/productos`)

    return {
        props: {
            products
        }
    }
}


export default function index({ products }) {
    return <>
        <main>
            <Products products={products} />
        </main>
    </>;
}