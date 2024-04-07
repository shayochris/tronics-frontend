import { 
  Navigate, 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} 
from "react-router-dom"

import AuthProvider from "./contexts/AuthContext"
import MainProvider from "./contexts/MainContext"

//pages
import HomeLayout from "./pages/HomeLayout"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import ProductDetails from "./pages/ProductDetails"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element = {<HomeLayout/>}>
        <Route
          path = '/'
          element={<Navigate to='home' />}
        />
        <Route 
          path='home' 
          element={<Home/>} 
        /> 
        <Route 
          path='product_details/:id' 
          element={<ProductDetails/>} 
        /> 
      </Route>

      <Route path='/login' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      
    </Route>
  )
)


function App() {
  return (
    <AuthProvider>
      <MainProvider>
        <RouterProvider router={router} />
      </MainProvider>
    </AuthProvider>
  )
}

export default App
