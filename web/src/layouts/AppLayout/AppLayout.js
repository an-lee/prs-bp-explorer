import { Layout } from 'antd'
const { Header, Content, Footer } = Layout

const AppLayout = ({ children }) => {
  return (
    <>
      <Layout className="layout">
        <Header style={{ background: '#7dbcea', color: '#fff' }}>
          PressOne Block Producers
        </Header>
        <Content style={{ padding: '1rem' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>
          Baizhiheizi ©2020 Created by an-lee
        </Footer>
      </Layout>
    </>
  )
}

export default AppLayout
