import rightIcon from '@/assets/right.svg'
import './index.scss'
const Module = ({ title, list = [] }) => {
    return (
        <div className="Home_module">
            <div className="Home_module_head">
                <p>{title}</p>
                <div>
                    <p>更多</p>
                    <img src={rightIcon} alt="icon" />
                </div>
            </div>
            <div className="Home_module_list">
                {[1, 2, 3, 4].map((item) => (
                    <div className="Home_module_item" key={item}>
                        <div className="Home_module_item_content">
                            <p>0:42:09</p>
                        </div>
                        <p className="Home_module_item_title">
                            送给你一个圣诞套装漂亮妹妹，陪你过夜送给你一个圣诞套装漂亮妹妹，陪你过夜送给你一个圣诞套装漂亮妹妹，陪你过夜送给你一个圣诞套装漂亮妹妹，陪你过夜
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Module
