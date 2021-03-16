import { gql } from '@apollo/client'

const QUERY = gql`
  query following($username: String!) {
    following(username: $username) {
      id
      connectionTime
      user {
        username
        fullName
        specialization {
          name
        }
      }
    }
  }
`

export {
  QUERY,
}