import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const houseContext = createContext()
const ContextHouse = ({children}) => {
  const [houses, setHouses] = useState([]) 
  const [loading, setLoading] = useState(false)
  const [error, seterror] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setuser] = useState(null)

  useEffect(()=>{
    const fetchHouses = async ()=>{
      const res = await axios.get('https://luxhomes-be.onrender.com/api/houses', {})
      setHouses(res.data)
    }
    fetchHouses()
  }, [])



  
      
    const fetchUser = async ()=>{
      if (!token) return
      const res = await axios.get('https://luxhomes-be.onrender.com/api/users/me', {
        headers: {'Authorization': `Bearer ${token}`}
      })
      setuser(res.data)
    }
    
    useEffect(()=>{
      fetchUser()
    }, [token])


 


  return (
    <>
    <houseContext.Provider
    value={{houses, setHouses, loading, setLoading, token, setToken, user, setuser, fetchUser}}>
      {children}
    </houseContext.Provider>
    </>
  )
}

export default ContextHouse