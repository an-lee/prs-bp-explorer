import { Skeleton, Table, Tag } from 'antd'

export const QUERY = gql`
  query StatementsQuery($name: String!) {
    statements(name: $name) {
      blockNumber
      timestamp
      producer
      from
      to
      amount
      type
      description
      status
      currency
      counter
      mixinMemo
      mixinSnapshotId
    }
  }
`

export const Loading = () => <Skeleton />

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ statements }) => {
  const columns = [
    {
      title: 'Block Num',
      dataIndex: 'blockNumber',
      key: 'blockNumber',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => (
        <Tag color={type === 'INCOME' ? 'green' : ''}>{type}</Tag>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from',
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: 'to',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (_, record) => (
        <span>
          {record.amount} {record.currency}
        </span>
      ),
    },
    {
      title: 'Counter',
      dataIndex: 'counter',
      key: 'counter',
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
    {
      title: 'Memo',
      dataIndex: 'mixinMemo',
      key: 'mixinMemo',
      render: (memo) => (memo ? memo : '-'),
    },
    {
      title: 'Snapshop',
      dataIndex: 'mixinSnapshotId',
      key: 'mixinSnapshotId',
      render: (_, record) =>
        record.mixinSnapshotId ? (
          <a
            href={`https://mixin.one/snapshots/${record.mixinSnapshotId}`}
            target="_blank"
            rel="noreferrer"
          >
            snapshot
          </a>
        ) : (
          '-'
        ),
    },
  ]
  return (
    <>
      <h3>Producer Statement</h3>
      <Table
        size="small"
        pagination={{ pageSize: 50 }}
        scroll={{ x: true }}
        rowKey="blockNumber"
        dataSource={statements}
        columns={columns}
      />
    </>
  )
}
