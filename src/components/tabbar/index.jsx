import React, { useState, useCallback } from 'react'
import homeIcon1 from '@/assets/homed.png'
import homeIcon2 from '@/assets/home.png'
import vipIcon1 from '@/assets/vipd.png'
import vipIcon2 from '@/assets/vip.png'
import mineIcon1 from '@/assets/mined.png'
import mineIcon2 from '@/assets/mine.png'
import './index.scss'
const TabBar = () => {
    const tabs = ['首页', '会员专区', '我的']
    return (
        <div className="TabBar">
            {tabs.map((e) => (
                <div className="TabBar_item" key={e}>
                    <span></span>
                </div>
            ))}
        </div>
    )
}
export default TabBar
