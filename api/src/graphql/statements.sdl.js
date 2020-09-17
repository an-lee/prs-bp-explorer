export const schema = gql`
  type Statement {
    blockNumber: Int!
    timestamp: String!
    producer: String!
    from: String!
    to: String!
    amount: Float!
    type: String!
    description: String!
    status: String!
    currency: String!
    counter: String!
    mixinMemo: String
    mixinSnapshotId: String
  }

  type Query {
    statements(name: String!): [Statement]!
  }
`
