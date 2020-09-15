export const schema = gql`
  type Producer {
    name: String!
    totalVotes: Float
    unpaidBlocks: Int
    lastClaimTime: String
    headBlockNum: Int
    headBlockTime: String
    createdAt: String
    balance: Float
    voters: [String!]
    staked: Float
    lastVoteWeight: Float
  }

  type Query {
    producers: [Producer]!
    producer(name: String!): Producer!
  }
`
