import { BrowserRouter as Router } from 'react-router-dom'
import RouterConfig from './routes/router'
import './App.css'
const App = () => {
    return (
        <Router>
            <div className="App">
                <RouterConfig />
            </div>
        </Router>
    )
}
export default App
 