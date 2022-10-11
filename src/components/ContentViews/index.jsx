
import "./index.css"
import { useState, useEffect } from "react"
const Content = (props) => {
    // 输入框默认内容
    const [val, setVal] = useState(props.title)
    useEffect(() => {
        setVal(props.title)
    }, [props.title])
    // 输入框回调，更新val值
    const setValue = (e) => {
        setVal(e.target.value)
    }
    // 确认，向父组件传值
    const confirm = () => {
        if (val.length === 0) return alert("请输入有效的菜单标题")
        props.setMenu(val)
    }
    return <div className="content">
        <input type="" name="" value={val} onInput={setValue} />
        <div className="btn" onClick={confirm}>
            保存
        </div>
    </div>
}
export default Content