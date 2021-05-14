import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar';
import HomePage from './homePage/homePage';
import Affiliations from './affiliations/affiliations';
import {BrowserRouter as  Switch, Route}  from 'react-router-dom';
import Signin from './signin/signin';
import Footer from './footer/footer';
import Signup from './signup/signup';

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/">
          <Navbar />
          <HomePage />
          <Affiliations />
          <Footer />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </div>
    </Switch>
    
  );
}

export default App;
