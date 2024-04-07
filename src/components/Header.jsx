import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

// icons
import {AiOutlineMenu} from 'react-icons/ai';


export default function Header() {
  const {tokens,logoutUser} = useAuth();

  const logout = () =>{
    logoutUser();
  }

  const navItems = [
    {
      id : 1,
      name : "home",
      path : '/home',
    },
    {
      id : 2,
      name : "cart",
      path : '/cart',
    },
    {
      id : 5,
      name : "orders",
      path : '/orders',
      show: tokens
    },
    {
      id : 6,
      name : "settings",
      path : '/settings',
      show : tokens
    },
    {
      id : 3,
      name : "sign in",
      path : '/login',
      show: !tokens
    },
    {
      id : 4,
      name : "sign out",
      show: tokens,
      onClick: (e) =>{
        e.preventDefault();
        logout();
      }
    },
  ];

  return (
    <div className='sticky top-0 bg-white border-b shadow-sm'>
      <div className='flex-b w-[95%] lg:w-[80%] mx-auto p-3'>
        <p>Logo</p>
        <div className="hidden sm:flex items-center relative">
          { navItems.map((item)=>{
            if(item.hasOwnProperty('show')){
              if(item.show){
                return (
                  <NavLink key={item.id} to={`${item.path}`} 
                    className="flex items-center hover:text-primary px-2 capitalize"
                    onClick={item.onClick}
                  >
                    {item.name}
                  </NavLink>
                )
              }
            }
            else{
              return (
                <NavLink key={item.id} to={`${item.path}`} 
                    className="flex items-center hover:text-primary px-2 capitalize"
                    onClick={item.onClick}
                >
                  {item.name}
                </NavLink>
              )
            }
          })
          }
        </div>
        <div className="sm:hidden">
          <AiOutlineMenu className='w-6 h-6' />
        </div>
      </div>
    </div>
  )
}
