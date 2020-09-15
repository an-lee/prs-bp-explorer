import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import AppLayout from 'src/layouts/AppLayout'

import Routes from 'src/Routes'

import './index.css'
import 'antd/dist/antd.css'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <AppLayout>
        <Routes />
      </AppLayout>
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
