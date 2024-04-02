import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

// icons
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineSearch } from 'react-icons/ai'
import { MdLogout } from "react-icons/md";


export default function Header() {
  const {tokens,logoutUser} = useAuth()

  const logout = () =>{
    logoutUser()
  }

  return (
    <div className='flex-b w-[95%] sm:w-[80%] mx-auto p-3'>
      <p>Logo</p>
      <div className="flex-a relative">
        <NavLink className="hidden sm:flex items-center hover:text-primary">
          <AiOutlineSearch className='w-5 h-5 mr-1'/>
          <span >Search</span>
        </NavLink>
        <NavLink className="hidden sm:flex items-center hover:text-primary px-4">
          <IoCartOutline className='w-5 h-5 mr-1'/>
          <span >Cart</span>
        </NavLink>
       
        { tokens ?
          <button onClick={logout} className="flex-a hover:text-primary ">
           <MdLogout className='w-5 h-5 mr-1'/>
            <span >Sign out</span>
          </button> 
          :
          <NavLink to="/login" className="flex-a hover:text-primary">
            <FiUser className='w-5 h-5 mr-1'/>
            <span >Sign In</span>
          </NavLink>
        }

      </div>
    </div>
  )
}
