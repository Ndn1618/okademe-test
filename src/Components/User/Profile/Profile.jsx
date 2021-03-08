import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { PROFILE } from "./Query"

// import components
import Loader from "../../Loader/Loader"
import GqlError from "../../Error/Error"
import NoPage from "../../Error/NoPage"

import { UseProfile } from "../../../Context/Profile"

import Header from "./Header/Header"
import { useEffect } from "react"

function Profile() {

  const { username } = useParams()

  const [setProfile] = UseProfile(true)

  const { networkStatus, error, data } = useQuery(PROFILE, {
    variables: {
      username,
    }
  })

  useEffect(() => {
    if (networkStatus === 7 && data.userProfile) {
      setProfile(data.userProfile)
    }
  }, [
    networkStatus,
    data,
    setProfile,
  ])

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
            <Header />
          </>
        )
      }
    </>
  )
}

export default Profile