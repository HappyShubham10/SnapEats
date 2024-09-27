import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { setCategory } from "../features/CategorySlice"
import FoodData from '../data/FoodData'


const CategoryMenu = () => {

  const [catergories,setCategories]=useState([])
  const dispatch=useDispatch()
  const selectedCategory = useSelector((state)=>state.category.category)

  const listUniqueCategories=()=>{
    const uniqueCategories=[...new Set(FoodData.map((food)=>food.category))]
    setCategories(uniqueCategories)
    
  }
  
  useEffect(()=>{
    listUniqueCategories()
  },[])


  return (
    <div className="text-center">
        <h3 className="py-6 text-xl  font-semibold">Find the best food</h3>

        <div className=" flex justify-center mt-6  gap-6  ">
          
        <button onClick={()=>dispatch(setCategory("All"))} className={`px-4 py-2  bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"} `}>All</button>

          {
            catergories.map((category,index)=>(
              <button onClick={()=>dispatch(setCategory(category))} key={index} className={`px-4 py-2  bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`}>{category}</button>
            ))
          }
        </div>
    </div>
  )
}

export default CategoryMenu