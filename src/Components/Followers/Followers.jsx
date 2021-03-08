import { useQuery } from '@apollo/client'
import { useParams, Link } from 'react-router-dom'
import { QUERY } from './Query'

import Loader from '../Loader/Loader'
import GqlError from '../Error/Error'

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
            <ul>
              {
                data.followers.map(f => (
                  <li key={f.id}>
                    <span>{moment(f.connectionTime).fromNow()}</span>
                    <Link to={"/" + f.user.username}>{f.user.fullName}</Link>
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