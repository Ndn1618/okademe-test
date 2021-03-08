import { Link } from 'react-router-dom'
import moment from 'moment'
import './Header.css'

import { UseProfile } from '../../../../Context/Profile'

function Header() {

  const [{ user, followersCount, followingCount }] = UseProfile()

  return (
    <>
      <header className="profile">
        <div className="infoBox">
          <section>
            <h3>
              <span>{user?.fullName}</span>
              <Link to={"/" + user?.username}>@{user?.username}</Link>
            </h3>
            <h4>
              <span>{user?.language?.name} •</span>
              <span>{user?.specialization?.name}</span>
            </h4>
            <p>
              <span>Joined:</span>
              <span>{moment(user?.joinedAt).fromNow()}</span>
            </p>
          </section>

          <section className="avatar">
            <img width={150} height={150} alt="avatar" src={"http://127.0.0.1:4000/user/" + user?.username} />
          </section>
        </div>

        <div className="navbar">
          <ul>
            <li>
              <Link to="/">codeBase</Link>
            </li>
            <li>
              <Link to={"/" + user?.username + "/followers"}>followers({followersCount})</Link>
            </li>
            <li>
              <Link to={"/" + user?.username + "/following"}>following({followingCount})</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header