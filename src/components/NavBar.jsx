import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {setSearch} from '../features/SearchSlice'

const NavBar = () => {

  const dispatch=useDispatch()

  return (
    <nav className="flex flex-col lg:flex-row justify-between p-4 mx-6">
        <div className="text-3xl">
            <Link to="/">
                SnapEats
            </Link>
        </div>
        <div className="p-4">
            <input 
            type="search"
            name="search"
            placeholder="Search here..."
            autoComplete="off"
            onChange={(e)=>dispatch(setSearch(e.target.value))}
            className="px-4 py-2 w-full lg:w-[500px] border-gray-400  text-md rounded-lg"
             />
        </div>
    </nav>
  )
}

export default NavBar