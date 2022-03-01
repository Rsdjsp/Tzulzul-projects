import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth';
import {signOut} from 'firebase/auth'
import { auth } from '../database';

export default function Navbar() {
  const [show,setShow] = useState(false)
  const {items:cart} = useSelector((state)=>state.cart)
  const {logged} = useSelector((state)=>state.auth)

  const dispatch = useDispatch()


  const signout = ()=>{
    signOut(auth).then(dispatch(logout()))
  }

  return <nav className='bg-white shadow-md mb-5 py-3 px-5 sm:px-0'>
      <div className='flex justify-between max-w-4xl mx-auto'>
        <Link href={"/"}>Inicio</Link>
        
        <ul className={`gap-5 ${show?"flex":"hidden"} sm:flex`}>
            <li><Link href="/productos">Productos</Link></li>
            <li><Link href="/productos">Productos</Link></li>
            {logged?<button onClick={signout}>Cerrar sesión</button>:
            <li><Link href="/auth">Auth</Link></li>
            }
            <li><Link href="/cart"><p>Carrito {cart.length}</p></Link></li>
        </ul>
        <button className='sm:hidden' onClick={()=>{setShow(!show)}}>Menu</button>
      </div>
  </nav>;
}