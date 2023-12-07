import React, { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import { AppOutline, MessageOutline, MessageFill, UnorderedListOutline, UserOutline } from 'antd-mobile-icons'

const App = () => {
    const tabs = [
        {
            key: 'home',
            title: '首页',
            icon: <AppOutline />,
            badge: Badge.dot
        },
        {
            key: 'todo',
            title: '待办',
            icon: <UnorderedListOutline />,
            badge: '5'
        },
        {
            key: 'message',
            title: '消息',
            icon: (active) => (active ? <MessageFill /> : <MessageOutline />),
            badge: '99+'
        },
        {
            key: 'personalCenter',
            title: '我的',
            icon: <UserOutline />
        }
    ]

    const [activeKey, setActiveKey] = useState('todo')

    return (
        <>
            <TabBar>
                {tabs.map((item) => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </>
    )
}
export default App
