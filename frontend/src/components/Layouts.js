import { Link } from 'react-router-dom';
import { Layout, Menu , theme } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import '../styles/global.css';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const Layouts = (props) => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Layout className="layout">
      <Header
        style={{
          alignItems: 'center',
        }}
      >
        <Menu
          mode="horizontal"
          theme="dark"
        >
          <Menu.Item key="1">
            <Link to="/">
              <div>
                <AppstoreOutlined />
                <span> Basic </span>
              </div>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '10px',
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {props.children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Meichu Hackthon ©2023
      </Footer>
    </Layout>
  );
};
export default Layouts;