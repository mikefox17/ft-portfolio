import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SinglePost from './components/SinglePost';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <NavBar />

                <Switch>
                    <Route component={Home} path='/' exact />
                    <Route component={SinglePost} path='/post/:slug' />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
