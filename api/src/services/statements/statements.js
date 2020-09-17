import prsAtm from 'prs-atm'

export const statements = async ({ name }) => {
  const res = await prsAtm.statement.query(name)
  const statements = res.map((statement) => {
    const snapshot = statement.transactions_trx_transaction_actions_data_meta
      ? statement.transactions_trx_transaction_actions_data_meta.mixin_snapshot
      : null
    return {
      blockNumber: statement.block.block_num,
      timestamp: statement.block.timestamp,
      producer: statement.block.producer,
      from: statement.transactions_trx_transaction_actions_data__from_user,
      to: statement.transactions_trx_transaction_actions_data__to_user,
      amount:
        statement.transactions_trx_transaction_actions_data__amount_quantity__amt,
      type: statement.type,
      description: statement.transactions_trx_transaction_actions_data_type,
      status: statement.status,
      currency: statement.currency,
      counter: statement.transactions_trx_transaction_actions_account,
      mixinMemo: snapshot ? snapshot.data : '',
      mixinSnapshotId: snapshot ? snapshot.snapshot_id : '',
    }
  })
  return statements
}
