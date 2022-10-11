// 修改导航菜单label值
export const format = (menu, key, val) => {
    let newMenu = menu.map(item => {
        if(item.key === key) {
            return {
                ...item,
                label: val,
                children: item.children && format(item.children, key, val)
            }
        } else return {
            ...item,
            children: item.children && format(item.children, key, val)
        }
    })
    return newMenu
}

// 获取导航菜单label值
export const getLabel = (menu, key) => {
    let val = ''
    menu.forEach(item => {
        if(item.key === key) val = item.label
        if(item.children) {
            let res = getLabel(item.children, key)
            if(res) val = res
        }
    })
    return val
}