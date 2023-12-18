import searchIcon from '@/assets/search.svg'
import serveIcon from '@/assets/serve.svg'
import logo from '@/assets/logo.png'
import './index.scss'
const Header = () => {
    return (
        <div className="head">
            <img src={logo} alt="logo" />
            <img src={searchIcon} alt="icon" />
            <img src={serveIcon} alt="icon" />
        </div>
    )
}
export default Header
