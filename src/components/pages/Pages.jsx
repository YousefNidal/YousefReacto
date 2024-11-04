
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Header from '../common/Header'
import Home from "../home/Home"
import About from "./About"
import Services from "./Services"
import Counter from "./Counter"
import Portfolio from "./Portfolio"
import Testimonials from "./Testimonials"
import Blog from "./Blog"
import Contact from "./Contact"
import Footer from "../common/Footer"



const Pages = () => {
  return (
    <>
    <Router>
<Header />

    <Switch>
          <Route exact  path="/" component={Home}></Route>
          <Route exact  path="/About" component={About}></Route>
          <Route exact  path="/Services" component={Services}></Route>
          <Route exact  path="/Counter" component={Counter}></Route>
          <Route exact  path="/Portfolio" component={Portfolio}></Route>
          <Route exact  path="/Testimonials" component={Testimonials}></Route>
          <Route exact  path="/Blog" component={Blog}></Route>
          <Route exact  path="/Contact" component={Contact}></Route>
          
          
          
          
        </Switch>
        <Footer />

    </Router>
        
    
    </>
  )
}

export default Pages