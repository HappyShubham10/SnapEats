import { MdOutlineClose } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";

const Cart = () => {
  
  const [activeCart,setActiveCart]=useState(false)
  const navigate=useNavigate()
  const cartItems = useSelector((state)=>state.cart.cart)
  const totalQty = cartItems.reduce((totalQty,item)=>totalQty+item.qty,0)
  const totalPrice = cartItems.reduce((total,item)=>total+ item.qty * item.price, 0)
  
  return (
    <>
        <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
            <div className="flex justify-between items-center my-3">
                <span className="text-xl font-bold text-gray-800">My Order</span>
                <MdOutlineClose onClick={()=>setActiveCart(!activeCart)} className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
            </div>

  
            {cartItems.length > 0 ? (
              cartItems.map((item)=>(
              <ItemCard 
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              qty={item.qty} /> 
            ))):(
              <h2 className="text-center text-xl font-bold text-gray-800">
                Your Cart is empty
              </h2>
            )}
            

            <div className="absolute bottom-0 ">
            <h3 className="font-semibold text-gray-800 mb-2">Items : {totalQty}</h3>
            <h3 className="font-semibold text-gray-800 mb-2">Total Amount : {totalPrice}</h3>
            <hr className="w-[90vw] lg:w-[18vw] my-2"/>
            <button onClick={()=>navigate("/success")}  className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5">
              Checkout
            </button>
        </div> 
      </div>
      <FaShoppingCart onClick={()=>setActiveCart(!activeCart)} className={`rounded- cursor-pointer  bg-white shadow-md text-4xl p-2 fixed bottom-10 right-10 ${totalQty>0 && "animate-bounce delay-500 transition-all"}`} />
       
    </>
  )
}

export default Cart