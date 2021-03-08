import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { PROFILE } from "./Query"

// import components
import Loader from "../../Loader/Loader"
import GqlError from "../../Error/Error"
import NoPage from "../../Error/NoPage"

import Header from "./Header/Header"

function Profile() {

  const { username } = useParams()

  const { networkStatus, error, data } = useQuery(PROFILE, {
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
        networkStatus === 7 && !data.userProfile && <NoPage />
      }
      {
        networkStatus === 7 && data.userProfile && (
          <>
            <Header fullName={data.userProfile.user.fullName} language={data.userProfile.user.language.name} username={username} specialization={data.userProfile.user.specialization.name} joinedAt={data.userProfile.user.joinedAt} followersCount={data.userProfile.followersCount} followingCount={data.userProfile.followingCount} />
          </>
        )
      }
    </>
  )
}

export default Profile