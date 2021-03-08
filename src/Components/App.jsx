import { Switch, Route } from "react-router-dom"
import Profile from "./User/Profile/Profile"
import Followers from "./Followers/Followers"
import "./App.css"

function App() {
  return (
    <>

      <h1>Okademe</h1>

      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/:username" component={Profile} exact />
        <Route path="/:username/followers" component={Followers} exact />
      </Switch>
    </>
  )
}

function Main() {
  return <>Main</>
}

export default App