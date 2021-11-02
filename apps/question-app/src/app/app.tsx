//import styles from './app.module.css';

// import { ReactComponent as Logo } from './logo.svg';
// import star from './star.svg';
import './app.css';

import MathjaxList from '../pages/mathjax/MathjaxList';
import MathjaxAdd from '../pages/mathjax/MathjaxAdd';

//import { ReactUi, Board } from '@enola/react-ui';

import { Route, Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

export function App() {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">문제집 목록</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Route path="/" exact component={MathjaxList} />
            <Route path="/add" exact component={MathjaxAdd} />

            <Route
              path="/page-2"
              exact
              render={() => (
                <div>
                  <Link to="/">Click here to go back to root page.</Link>
                </div>
              )}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    // <div className={styles.app}>
    //   <Board.BoardList />
    //   <div role="navigation">
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/page-2">Page 2</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <Route
    //     path="/"
    //     exact
    //     render={() => (
    //       <div>
    //         This is the generated root route.{' '}
    //         <Link to="/page-2">Click here for page 2.</Link>
    //       </div>
    //     )}
    //   />
    //   <Route
    //     path="/page-2"
    //     exact
    //     render={() => (
    //       <div>
    //         <Link to="/">Click here to go back to root page.</Link>
    //       </div>
    //     )}
    //   />
    // </div>
  );
}

export default App;
