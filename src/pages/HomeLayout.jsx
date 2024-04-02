import { Outlet } from 'react-router-dom'

//components
import Header from '../components/Header'


export default function HomeLayout() {
  return (
    <div className='font-roboto text-sm'>
      <Header/>
      <div className="w-[95%] sm:w-[80%] mx-auto p-3">
        <Outlet/>
      </div>
    </div>
  )
}
