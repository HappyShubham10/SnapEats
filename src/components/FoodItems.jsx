import FoodCard from "./FoodCard"
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category=useSelector((state)=>state.category.category)
  const search=useSelector((state)=>state.search.search)
  const handleToast=(name)=>toast.success(`Added ${name}`)

  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <div className="p-8 mt-10 flex justify-center  flex-wrap gap-10">
        {FoodData.filter((food)=>{
          if(category === "All")
            return food.name.toLowerCase().includes(search.toLowerCase())
          else
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())  
        }).map((item)=>(
            <FoodCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            desc={item.desc}
            rating={item.rating}
            img={item.img}
            handleToast={handleToast} />)
        
        )
        }
        
    </div>
    </>
  )
}

export default FoodItems