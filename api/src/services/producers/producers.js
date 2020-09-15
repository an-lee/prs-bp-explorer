import prsAtm from 'prs-atm'

export const producers = async () => {
  const res = await prsAtm.producer.getAll()
  const producers = res.rows.map((producer) => {
    return {
      name: producer.owner,
      totalVotes: parseFloat(producer.total_votes),
      unpaidBlocks: producer.unpaid_blocks,
      lastClaimTime: producer.last_claim_time,
    }
  })

  return producers
}

export const producer = async ({ name }) => {
  const res = await prsAtm.account.getByName(name)
  return {
    name: res.account_name,
    headBlockNum: res.head_block_num,
    staked: parseFloat(res.voter_info.staked) / 10000.0,
    lastVoteWeight: parseFloat(res.voter_info.last_vote_weight),
    voters: res.voter_info.producers,
    createdAt: res.created,
  }
}
