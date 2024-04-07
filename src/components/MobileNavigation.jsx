import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from "react-icons/fi";
import { TbLogin } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export default function MobileNavigation() {
  const {tokens,logoutUser} = useAuth();
  const logout = () =>{
    logoutUser();
  }
  const navItems = [
    {
      id : 1,
      icon : <AiOutlineHome className='w-5 h-5' />,
      title: 'home',
      path : '/home',
    },
    {
      id : 2,
      icon : <FiShoppingCart className='w-5 h-5' />,
      title: 'cart',
      path : '/cart',
      show: tokens
    },
    {
      id : 3,
      icon : <AiOutlineSearch className='w-5 h-5' />,
      title: 'search',
      path : '/search',
    },
    {
      id : 4,
      icon : <TbTruckDelivery className='w-5 h-5' />,
      title: 'orders',
      path : '/orders',
      show: tokens
    },
    {
      id : 4,
      icon : <TbLogin className='w-5 h-5' />,
      title: 'login',
      path : 'login',
      show: !tokens
    },
    {
      id : 5,
      icon : <MdLogout className='w-5 h-5' />,
      title: 'signout',
      show: tokens,
      onClick: (e) =>{
        e.preventDefault();
        logout();
      }
    },
  ];
  return (
    <div className='fixed bottom-0 left-0 w-full border-t shadow-md p-2 bg-white sm:hidden'>
      <div className=" flex items-center justify-around">
        { navItems.map((item)=>{
          if(item.hasOwnProperty('show')){
            if(item.show){
              return (
                <NavLink key={item.id} to={`${item.path}`} 
                  className="flex flex-col items-center hover:text-primary capitalize text-center"
                  onClick={item.onClick}
                >
                  {item.icon}
                  <span className="text-xs">{item.title}</span>
                </NavLink>
              )
            }
          }
          else{
            return (
              <NavLink key={item.id} to={`${item.path}`} 
                  className="flex flex-col items-center hover:text-primary capitalize text-center"
                  onClick={item.onClick}
              >
                {item.icon}
                <span className="text-xs">{item.title}</span>
              </NavLink>
            )
          }
        })
        }
      </div>
    </div>
  )
}
