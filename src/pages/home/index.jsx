// import Ad from './ad/index'
import HomeModule from './module/index'
import Header from '@/components/header'
import './index.scss'

const Home = () => {
    return (
        <div className="Home">
            <Header />
            {/* 广告 */}
            {/* <Ad /> */}
            <HomeModule title="最近更新" />
            <HomeModule title="热门影片" />
        </div>
    )
}
export default Home
