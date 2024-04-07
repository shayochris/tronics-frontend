import { Outlet } from 'react-router-dom'

//components
import Header from '../components/Header'
import MobileNavigation from '../components/MobileNavigation'


export default function HomeLayout() {
  return (
    <div className='font-poppins text-gray-700'>
      <Header/>
      <div className="w-[95%] sm:w-[80%] mx-auto p-3 mb-12">
        <Outlet/>
      </div>
      <MobileNavigation/>
    </div>
  )
}
