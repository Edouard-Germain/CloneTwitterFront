import { createContext, useState } from "react"
import { useNavigate } from 'react-router-dom'

const UserContext = createContext({})

const UserContextProvider = props => {
  const navigate = useNavigate()
  const [ user, setUser ] = useState(null)
  const [ users, setUsers ] = useState([])
  const [ feed, setFeed ] = useState([])
  const [ showLogout, setShowLogout ] = useState(false);
  const [ showTweet, setShowTweet ] = useState(false);
  // const [ page, setPage ] = useState(1)

  
  const getFeed = async () => {
    const response = await fetch(`http://localhost:5000/feed/`, {
      method: 'get',
    })
    const data = await response.json()
    setFeed([...data])
  }

  const getUsers = async () => {
    const response = await fetch(`http://localhost:5000/users/` , {
      method: 'get',
    })
    const data = await response.json()
    setUsers([...data])
  }
  
  // const putFollowing = async (_id, body) => {
  //   const response = await fetch(`http://localhost:5000/users/${_id}`, {
  //     method: 'put',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(body)
  //   })
  //   const data = await response.json()
  //   setUser([...data])
  // }
 
  const handleCloseTweet = () => setShowTweet(false);
  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);
  const handleShowTweet = () => setShowTweet(true);

  const handleLogout = () => {
    fetch('http://localhost:5000/auth/logout', {
      method: 'delete',
    })
    setUser(null)
    navigate('/login')
    handleCloseLogout()   
  }

  const value = {
      user,
      setUser,
      users,
      showLogout,
      setShowLogout,
      handleShowLogout,
      handleCloseLogout,
      handleLogout,
      showTweet,
      setShowTweet,
      handleShowTweet,
      handleCloseTweet,
      setUsers,
      getUsers,
      feed,
      setFeed,
      getFeed,
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
