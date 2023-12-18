import { useNavigate } from 'react-router-dom'
import rightIcon from '@/assets/right.svg'
import VideoCover from '@/components/videoCover'
import './index.scss'
const Module = ({ title, list = [] }) => {
    let navigate = useNavigate()
    // 跳转列表
    const toListPage = () => {
        navigate('/list', { state: { videoId: '99233' } })
    }
    return (
        <div className="Home_module">
            <div className="Home_module_head">
                <p>{title}</p>
                <div onClick={toListPage}>
                    <p>更多</p>
                    <img src={rightIcon} alt="icon" />
                </div>
            </div>
            <div className="Home_module_list">
                {[1, 2, 3, 4].map((item) => (
                    <VideoCover key={item} />
                ))}
            </div>
        </div>
    )
}
export default Module
