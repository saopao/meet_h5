import searchIcon from '@/assets/search.svg'
import serveIcon from '@/assets/serve.svg'
import './index.scss'

import Ad from './ad/index'

const Home = () => {
    return (
        <div className="Home">
            <div className="head">
                <h1>Meet Video</h1>
                <img src={searchIcon} alt="icon" />
                <img src={serveIcon} alt="icon" />
            </div>
            <Ad />
        </div>
    )
}
export default Home
