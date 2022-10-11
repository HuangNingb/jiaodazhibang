import "./index.css"
import { Layout,  } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons'
import React, { useState } from 'react';
import MenuNav from "./../../components/MenuNav"
import ContentViews from "../../components/ContentViews"
import Logo from "./../../assets/logo.svg"
import { format, getLabel } from "./../../utils"
const { Header, Sider } = Layout;

const Home = () => {
  // 导航菜单
  const [menuItems, setMenuItem] = useState([
    {
      label: '菜单一', key: 'item-1',
      children: [
        { label: '子菜单1-1', key: 'submenu-item-1-1' },
        { label: '子菜单1-2', key: 'submenu-item-1-2' }
      ]
    }, // 菜单项务必填写 key
    {
      label: '菜项二', key: 'item-2',
      children: [
        { label: '子菜单2-1', key: 'submenu-item-2-1' },
        { label: '子菜单2-2', key: 'submenu-item-2-2' }
      ],
    },
  ])
  // 当前选中项label
  const [activeMenu, setActiveMenu] = useState("")
  // 当前选中项key
  const [activeKey, setActiveKey] = useState("")
  // 导航菜单回调
  const menuCallback = (key) => {
    setActiveMenu(getLabel(menuItems, key))
    setActiveKey(key)
  }
  // 修改导航菜单标题
  const setMenu = (v) => {
    setMenuItem(format(menuItems, activeKey, v))
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider>
        <div className="logo-container">
          <img src={Logo} alt="" className="logo" />
          <span className="title"> react </span>
        </div>
      
        <MenuNav nav={menuItems} menuCallback={menuCallback} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <div className="header-r">
            <QuestionCircleOutlined />
            <div className="header-txt">admin</div>
          </div>
        </Header>
        <ContentViews title={activeMenu} setMenu={setMenu} />
      </Layout>
    </Layout>
  );
};

export default Home;