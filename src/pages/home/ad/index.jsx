import { Space, Swiper, Toast } from 'antd-mobile'
import './index.scss'

const Ad = () => {
    return (
        <div className="Ad">
            <Swiper>
                <Swiper.Item>
                    <div className="Ad_item"></div>
                </Swiper.Item>
                <Swiper.Item>
                    <div className="Ad_item"></div>
                </Swiper.Item>
                <Swiper.Item>
                    <div className="Ad_item"></div>
                </Swiper.Item>
            </Swiper>
        </div>
    )
}
export default Ad
