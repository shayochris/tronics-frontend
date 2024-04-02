import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [tokens,setTokens] = useState(()=>{
    let data = localStorage.getItem('tokens')
    return data ? JSON.parse(data) : false
  })

  const loginUser = (data) => {
    setTokens(data)
    localStorage.setItem('tokens', JSON.stringify(data))
  }
  const logoutUser = () => {
    setTokens(false)
    localStorage.removeItem('tokens')
  }
  const contextData = {
    tokens,
    loginUser,
    logoutUser
  }
  return (
    <AuthContext.Provider value={contextData}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)