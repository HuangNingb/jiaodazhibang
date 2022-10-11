
import { Menu } from "antd"
const MenuNav = (props) => {
    const clickMenu = (e) => {
        props.menuCallback(e.key)
    }
    return (
    
    <Menu
        onClick={clickMenu}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        theme="dark"
        mode="inline"
        items={props.nav}
      />)
}
export default MenuNav