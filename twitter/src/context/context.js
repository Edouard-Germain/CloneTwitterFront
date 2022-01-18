import { createContext, useState } from "react"

const UserContext = createContext({})
const UserContextProvider = props => {
const [userName, setUserName] = useState(null)

const value = {
    userName,
    setUserName
}

      return (
        <UserContext.Provider value={value}>
          {props.children}
        </UserContext.Provider>
      )   
}

export  {
    UserContext,
    UserContextProvider
} 
