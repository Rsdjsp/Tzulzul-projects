import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  reduceFromCart,
  saveCart,
} from "../features/Cart";
import { FaCartPlus, FaCartArrowDown } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
export default function Product({ product }) {
  const { logged } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const agregarAlCarrito = () => {
    dispatch(addToCart(product));
    dispatch(saveCart());
  };

  const removerDelCarrito = () => {
    dispatch(removeFromCart(product));
    dispatch(saveCart());
  };
  const reducirDelCarrito = () => {
    dispatch(reduceFromCart(product));
    dispatch(saveCart());
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
      animate={{
        opacity: 1,
      }}
      className="bg-white shadow-md"
    >
      <div className="p-2">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="my-3">{product.description}</p>
        <p className="my-3">{product.cantidad}</p>
        {logged && (
          <>
            <button onClick={agregarAlCarrito}>
              <FaCartPlus className="text-sky-300 w-5 h-5 mr-5" />
            </button>
            <button onClick={reducirDelCarrito}>
              <FaCartArrowDown className="text-red-400 w-5 h-5 mr-5" />
            </button>
            <button onClick={removerDelCarrito}>
              <FaTrash className="text-red-400 w-5 h-5 mr-5" />
            </button>
          </>
        )}
      </div>
      <img src={product.img}></img>
    </motion.article>
  );
}
