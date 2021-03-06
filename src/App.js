import './App.css';
import Navbar from './navbar/navbar';
import HomePage from './homePage/homePage';
import Affiliations from './affiliations/affiliations';
import {BrowserRouter as  Switch, Route}  from 'react-router-dom';
import Signin from './signin/signin';
import Footer from './footer/footer';
import Signup from './signup/signup';
import Pricing from './pricing/pricing';
import Advert from './advert/advert';
// import Testimonials from './testimonials/testimonials';
import Grabber from './grabber/grabber';
import Products from './products/products';
import Advert2 from './advert2/advert2';
import Reactformtest from './reactforms/reactform';
function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/">
          <Navbar />
          <HomePage />
          <Affiliations />
          <Grabber />
          <Advert />
          <Advert2 />
          
          {/* <Testimonials /> */}
          <Footer />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/start-free-trial">
          <Signup />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/reactformtest">
          <Reactformtest />
        </Route>
      </div>
    </Switch>
    
  );
}

export default App;
