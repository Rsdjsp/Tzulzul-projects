import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { emptyCart, getCart } from '../features/Cart'
import Footer from './Footer';
import Navbar from './Navbar';
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../database';
import { login } from '../features/auth';

export default function Page({children}) {
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth,(authResult)=>{
      console.log(authResult)
      if(authResult){
        dispatch(login({
          email:authResult.email,
          // id:authResult.providerData[0].uid
          id:authResult.uid,
          profilePic:authResult.photoURL
        }))
        dispatch(getCart())
      }else{
        dispatch(emptyCart())
      }
    })
  },[])
  
  return <div className='bg-gray-100'>
        <Navbar/>
        <main className='max-w-4xl mx-auto px-5 sm:px-0'>
            {children}
        </main>
        <Footer/>
  </div>;
}