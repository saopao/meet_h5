import { Outlet } from 'react-router-dom'
import TabBar from '../tabbar' // 底部导航组件
import './index.scss'

function LayoutWithFooter() {
    return (
        <div className="LayoutWithFooter">
            <Outlet /> {/* 渲染子路由组件 */}
            <TabBar /> {/* 底部导航 */}
        </div>
    )
}

export default LayoutWithFooter
