import { createContext, useState, useContext } from 'react'

const Context = createContext()

function Provider({ children }) {

  const [profile, setProfile] = useState({})

  return (
    <Context.Provider value={{ profile, setProfile }}>
      {children}
    </Context.Provider>
  )
}

function Profile(setterOnly) {

  const { profile, setProfile } = useContext(Context)

  return setterOnly ? [setProfile] : [profile, setProfile]
}

export {
  Provider,
  Profile
}