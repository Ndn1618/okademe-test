import { Switch, Route } from "react-router-dom"
import Profile from "./User/Profile/Profile"
import Followers from "./User/Followers/Followers"
import Following from "./User/Following/Following"
import "./App.css"

import { Provider as ProfileProvider } from "../Context/Profile"

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Main} exact />
        <ProfileProvider>
          <Route path="/:username" component={Profile} exact />
          <Route path="/:username/followers" component={Followers} exact />
          <Route path="/:username/following" component={Following} exact />
        </ProfileProvider>
      </Switch>
    </>
  )
}

function Main() {
  return <>Main</>
}

export default App