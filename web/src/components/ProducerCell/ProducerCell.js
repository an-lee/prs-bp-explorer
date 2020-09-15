export const QUERY = gql`
  query ProducerQuery($name: String!) {
    producer(name: $name) {
      name
      staked
      lastVoteWeight
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ producer }) => {
  return JSON.stringify(producer)
}
