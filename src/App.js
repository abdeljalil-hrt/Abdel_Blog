import './index.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import notFound from './notFound';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="blog-previeww">
          <Switch>
            <Route exact path="/home" component={Home} />

            <Route path="/create" component={Create} />

            <Route path="/blogs/:id" component={BlogDetails} />

            <Route path="*" component={notFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}


export default App;