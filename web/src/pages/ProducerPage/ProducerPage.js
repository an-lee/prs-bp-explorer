import { Link, routes } from '@redwoodjs/router'
import ProducerCell from 'src/components/ProducerCell'

const ProducerPage = ({ name }) => {
  return (
    <>
      <ProducerCell name={name} />
    </>
  )
}

export default ProducerPage
