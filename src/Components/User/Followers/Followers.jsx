import './Followers.css'

import { useQuery } from '@apollo/client'
import { useParams, Link } from 'react-router-dom'
import { QUERY } from './Query'

import Loader from '../../Loader/Loader'
import GqlError from '../../Error/Error'

import Header from '../Profile/Header/Header'

import moment from 'moment'

function Followers() {

  const { username } = useParams()

  const { networkStatus, error, data } = useQuery(QUERY, {
    variables: {
      username,
    }
  })

  return (
    <>
      {
        networkStatus === 1 && <Loader />
      }
      {
        networkStatus === 8 && <GqlError>{error.message}</GqlError>
      }
      {
        networkStatus === 7 && (
          <>
            <Header />
            <ul className="followers">
              {
                data.followers.map(f => (
                  <li key={f.id}>
                    <Link to={"/" + f.user.username}>{f.user.fullName}</Link>
                    <span>{moment(f.connectionTime).fromNow()}</span>
                  </li>
                ))
              }
            </ul>
          </>
        )
      }
    </>
  )
}

export default Followers