import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
// uses html5 history api to keep our user interface insync with our url and hash router uses the hash portion of the url
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats.jsx'
import FeedbackForm from './components/FeedbackForm.jsx'
import AboutIconLink from './components/AboutIconLink.jsx'
import AboutPage from './pages/AboutPage.jsx'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
    
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route 
                        exact path='/' 
                        element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }></Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                </div>
                <AboutIconLink/>
            </Router>
        </FeedbackProvider>
    )
}

export default App