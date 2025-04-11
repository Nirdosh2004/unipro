import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";



export const AppContext = createContext()

export const AppContextProvider = (props) => {

  const [token, setToken] = useState('i')

  const navigate = useNavigate()

  const value = {
    token,
    navigate
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )

}