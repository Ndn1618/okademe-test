import { createContext, useState, useContext } from 'react'

const Context = createContext()

function Provider({ children }) {

  const [profile, setProfile] = useState({})

  const value = null

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

function userProfile(setterOnly) {

  const { profile, setProfile } = useContext(Context)

  return setterOnly ? [setProfile] : [profile, setProfile]
}

export {
  Provider,
  userProfile
}