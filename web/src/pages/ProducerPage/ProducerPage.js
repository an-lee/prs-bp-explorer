import ProducerCell from 'src/components/ProducerCell'
import StatementsCell from 'src/components/StatementsCell'

const ProducerPage = ({ name }) => {
  return (
    <>
      <ProducerCell name={name} />
      <StatementsCell name={name} />
    </>
  )
}

export default ProducerPage
