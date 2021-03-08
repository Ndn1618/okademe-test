import { Link } from 'react-router-dom'
import moment from 'moment'
import './Header.css'

function Header({ fullName, language, username, specialization, joinedAt, followersCount, followingCount }) {
  return (
    <>
      <header className="profile">
        <div className="infoBox">
          <section>
            <h3>
              <span>{fullName}</span>
              <Link to={"/" + username}>@{username}</Link>
            </h3>
            <h4>
              <span>{language} •</span>
              <span>{specialization}</span>
            </h4>
            <p>
              <span>Joined:</span>
              <span>{moment(joinedAt).fromNow()}</span>
            </p>
          </section>

          <section classname="avatar">
            <img width={150} height={150} alt="avatar" src={"http://127.0.0.1:4000/user/" + username} />
          </section>
        </div>

        <div className="navbar">
          <ul>
            <li>
              <Link to="/">codeBase</Link>
            </li>
            <li>
              <Link to={"/" + username + "/followers"}>followers({followersCount})</Link>
            </li>
            <li>
              <Link to={"/" + username + "/following"}>following({followingCount})</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header