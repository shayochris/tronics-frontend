import { createContext, useContext } from "react";

export const MainContext = createContext()

const MainProvider = ({ children }) => {
  const baseURL = 'http://localhost:8000/api/'
  const contextData = {
    baseURL
  }
  return (
    <MainContext.Provider value={contextData} >
      {children}
    </MainContext.Provider>
  )
}

export default MainProvider

export const useMain = () => useContext(MainContext)