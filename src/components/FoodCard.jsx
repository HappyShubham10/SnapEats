import { IoStarSharp } from "react-icons/io5"
import { useDispatch } from 'react-redux'
import { addToCart } from "../features/CartSlice"



const FoodCard = ({ id, name, price, desc, img, rating,handleToast }) => {
  const dispatch =useDispatch()

  return (
    <div className="font-bold w-[250px] bg-white px-8 py-6 flex flex-col rounded-lg gap-2 hover:scale-105">
        <img src={img} alt=""
        className="w-auto h-[150px] hover:scale-105 cursor-grab transition-all duration-500 ease-in-out" />
        <div className="mt-6 text-lg flex justify-between ">
            <h2>{name}</h2>
            <span className="text-green-500">₹{price}</span>
        </div>
        <p className="line-clamp-2 text-sm font-normal mt-6">{desc}</p>
        <div className="mt-8 flex justify-between">
            <span className="flex justify-center items-center "><IoStarSharp className="mr-3 text-xl text-yellow-400" /> {rating}</span>
            <button onClick={()=>{
              dispatch(addToCart({id,name,price,img,qty:1}))
              handleToast(name)
            }} className="p-3 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">Add to Cart</button>
        </div>

    </div>
  )
}

export default FoodCard