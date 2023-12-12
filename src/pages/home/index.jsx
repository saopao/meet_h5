import searchIcon from '@/assets/search.svg'
import serveIcon from '@/assets/serve.svg'
import './index.scss'

import Ad from './ad/index'
import HomeModule from './module/index'

const Home = () => {
    return (
        <div className="Home">
            <div className="head">
                <h1>Meet Video</h1>
                <img src={searchIcon} alt="icon" />
                <img src={serveIcon} alt="icon" />
            </div>
            {/* 广告 */}
            <Ad />
            <HomeModule title="最近更新" />
            <HomeModule title="热门影片" />
        </div>
    )
}
export default Home
