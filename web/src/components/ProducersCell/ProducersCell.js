import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query ProducersQuery {
    producers {
      name
      unpaidBlocks
      lastClaimTime
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ producers }) => {
  return producers.map((producer) => (
    <li>
      <Link to={routes.producer({ name: producer.name })}>{producer.name}</Link>
    </li>
  ))
}
