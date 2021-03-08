import { createContext } from 'react'

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

  const { }
}