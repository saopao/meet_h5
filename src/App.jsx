import { BrowserRouter as Router } from 'react-router-dom'
import RouterConfig from './routes/router'
import './App.css'
import { useEffect } from 'react'
const App = () => {
    useEffect(() => {
        const appHeight = () => {
            const doc = document.documentElement
            doc.style.setProperty('--app-height', `${window.innerHeight}px`)
        }
        window.addEventListener('resize', appHeight)
        appHeight()
    }, [])
    return (
        <Router>
            <div className="App">
                <RouterConfig />
            </div>
        </Router>
    )
}
export default App
