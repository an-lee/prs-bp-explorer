import { Link, routes } from '@redwoodjs/router'
import { Card, List, Spin, Tag } from 'antd'
import moment from 'moment'

export const QUERY = gql`
  query ProducersQuery {
    producers {
      name
      unpaidBlocks
      lastClaimTime
      scaledVotes
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

export const Success = ({ producers }) => {
  return (
    <List
      grid={{ gutter: 16, xs: 1, sm: 2, md: 4, column: 4 }}
      dataSource={producers}
      renderItem={(producer, index) => (
        <List.Item key={producer.name}>
          <Link to={routes.producer({ name: producer.name })}>
            <Card
              hoverable
              size="small"
              title={
                <span>
                  {producer.name}{' '}
                  <Tag color={index < 21 ? 'green' : ''}>
                    #{index + 1} {index < 21 ? 'producing' : ''}
                  </Tag>
                </span>
              }
            >
              <div>
                With scaled votes <b>{producer.scaledVotes.toFixed(4)}</b>, has{' '}
                <b>{producer.unpaidBlocks}</b> blocks unpaid; Last claimed at{' '}
                {moment(producer.lastClaimTime).fromNow()}
              </div>
            </Card>
          </Link>
        </List.Item>
      )}
    />
  )
}
