import { Link, routes } from '@redwoodjs/router'
import { Button, Descriptions, PageHeader, Spin, Tag } from 'antd'

export const QUERY = gql`
  query ProducerQuery($name: String!) {
    producer(name: $name) {
      name
      headBlockNum
      headBlockTime
      balance
      staked
      lastVoteWeight
      createdAt
      voters
    }
    producers {
      name
      scaledVotes
      unpaidBlocks
      lastClaimTime
    }
  }
`

export const Loading = () => (
  <div style={{ textAlign: 'center', margin: 20 }}>
    <Spin />
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ producer, producers }) => {
  const index = producers.findIndex((bp) => bp.name === producer.name)
  producer = Object.assign({}, producer, producers[index])
  return (
    <>
      <PageHeader title={producer.name} onBack={() => window.history.back()} />
      <Descriptions size="small" column={{ xs: 1, sm: 2 }}>
        <Descriptions.Item label="Ranking">
          <Tag color={index < 21 ? 'green' : ''}>
            #{index + 1} {index < 21 ? 'producing' : ''}
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Last vote weight">
          {producer.lastVoteWeight}
        </Descriptions.Item>
        <Descriptions.Item label="Scaled votes">
          {producer.scaledVotes.toFixed(4)}
        </Descriptions.Item>
        <Descriptions.Item label="Staked">
          {producer.staked} PRS
        </Descriptions.Item>
        <Descriptions.Item label="Balance">
          {producer.balance} PRS
        </Descriptions.Item>
        <Descriptions.Item label="Unpaid blocks">
          {producer.unpaidBlocks}
        </Descriptions.Item>
        <Descriptions.Item label="Last claimed at">
          {producer.lastClaimTime}
        </Descriptions.Item>
        <Descriptions.Item label="Head block number">
          {producer.headBlockNum}
        </Descriptions.Item>
        <Descriptions.Item label="Head block time">
          {producer.headBlockTime}
        </Descriptions.Item>
        <Descriptions.Item label="Created at">
          {producer.createdAt}
        </Descriptions.Item>
        <Descriptions.Item label="Voters">
          {producer.voters.map((voter) => (
            <span key={voter.name}>
              <Link to={routes.producer({ name: voter })}>
                <Button type="link">{voter}</Button>
              </Link>
            </span>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}
