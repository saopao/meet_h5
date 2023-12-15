import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
const TabBar = () => {
    const TABS = [
        { title: '首页', path: '/' },
        { title: '会员', path: '/vip' },
        { title: '我的', path: '/mine' }
    ]
    const [active, setActive] = useState(0)
    return (
        <div className="TabBar">
            {TABS.map((e, i) => (
                <Link to={e.path} key={i} className="TabBar_item" onClick={() => setActive(i)}>
                    <span className={i === active ? 'active' : ''}></span>
                    <p className={i === active ? 'active' : ''}>{e.title}</p>
                </Link>
            ))}
        </div>
    )
}
export default TabBar
