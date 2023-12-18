import Header from '@/components/header'
import VideoCover from '@/components/videoCover'
import './index.scss'
import { memo } from 'react'

const VideoList = memo(({ list }) => (
    <div className="List_container">
        {list.map((item) => (
            <VideoCover key={item} />
        ))}
    </div>
))
VideoList.displayName = 'VideoList'
const List = () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className="ListPage">
            <Header />
            <div className="List_head">
                <p>总览</p>
                <p>最近更新</p>
                <p>99233 部影片</p>
            </div>
            <VideoList list={list} />
            <div className="List_pagination">
                <p>上一页</p>
                <div>
                    <input type="text" />
                    <span>/ 999</span>
                </div>
                <p>下一页</p>
            </div>
        </div>
    )
}
export default List
