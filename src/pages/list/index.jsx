import Header from '@/components/header'
import VideoCover from '@/components/videoCover'
import './index.scss'
import { memo, useEffect, useState } from 'react'

const VideoList = memo(({ list }) => (
    <div className="List_container">
        {console.log('列表刷新~~~~~~~~')}
        {list.map((item) => (
            <VideoCover key={item} />
        ))}
    </div>
))
VideoList.displayName = 'VideoList'
const List = () => {
    const [list] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
    // 分页参数
    const [pageState, setPageState] = useState({
        count: 1, // 用户输入的页码
        params: {
            page: 1,
            size: 20
        }
    })

    // 根据分页变化重新请求数据 TUDO
    useEffect(() => {
        console.log(pageState.params.page)
    }, [pageState.params.page])

    // 页码输入框变化
    const countChange = (e) => {
        setPageState((prevState) => ({ ...prevState, count: e.target.value }))
    }
    // 页面输入框失焦
    const countBlur = () => {
        let newCount = parseInt(pageState.count, 10)
        if (isNaN(newCount) || newCount < 1) {
            newCount = 1
        }
        setPageState((prevState) => {
            if (newCount !== prevState.params.page) {
                return { ...prevState, count: newCount, params: { ...prevState.params, page: newCount } }
            }
            return prevState
        })
    }
    // 上一页
    const prevPage = () => {
        setPageState((prevState) => {
            const newPage = Math.max(1, prevState.params.page - 1) // 确保页码不小于1
            return { ...prevState, count: newPage, params: { ...prevState.params, page: newPage } }
        })
    }
    // 下一页
    const nextPage = () => {
        setPageState((prevState) => {
            const newPage = prevState.params.page + 1 // 这里您可能还要考虑最大页数限制
            return { ...prevState, count: newPage, params: { ...prevState.params, page: newPage } }
        })
    }
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
                <p onClick={prevPage} style={{ opacity: pageState.params.page != 1 ? 1 : 0 }}>
                    上一页
                </p>
                <div>
                    <input value={pageState?.count} onChange={countChange} onBlur={countBlur} type="number" />
                    <span>/ 999</span>
                </div>
                <p onClick={nextPage}>下一页</p>
            </div>
        </div>
    )
}
export default List
