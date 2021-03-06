import prsAtm from 'prs-atm'

export const producers = async () => {
  const res = await prsAtm.producer.getAll()
  const producers = res.rows.map((producer) => {
    return {
      name: producer.owner,
      totalVotes: parseFloat(producer.total_votes),
      unpaidBlocks: producer.unpaid_blocks,
      lastClaimTime: producer.last_claim_time,
      scaledVotes:
        parseFloat(producer.total_votes) /
        parseFloat(res.total_producer_vote_weight),
    }
  })

  return producers
}

export const producer = async ({ name }) => {
  const res = await prsAtm.account.getByName(name)
  return {
    name: res.account_name,
    headBlockNum: res.head_block_num,
    headBlockTime: res.head_block_time,
    staked: parseFloat(res.voter_info.staked) / 10000.0,
    balance: parseFloat(res.core_liquid_balance.split(' ')[0]),
    lastVoteWeight: parseFloat(res.voter_info.last_vote_weight),
    voters: res.voter_info.producers,
    createdAt: res.created,
  }
}
