import { createContext, useState, useEffect} from "react"

const UserContext = createContext({})
const UserContextProvider = props => {
const [ user, setUser ] = useState(null)
const [feed, setFeed] = useState([])
const [page, setPage] = useState(1)


useEffect(() => {
  fetch(`http://localhost:5000/feed/`)
  .then(response => response.json())
  .then(data => setFeed([...data]))
}, [])

const value = {
    user,
    setUser,
    feed,
    setFeed
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
