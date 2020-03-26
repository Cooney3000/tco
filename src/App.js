import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Verein } from './Verein';
import { Mannschaften } from './Mannschaften';
import { Jugend } from './Jugend'
import { Training } from './Training'
import { Login } from './Login'
import { InternHome } from './intern/Home'
import { InternHistory } from './intern/History'
import { InternPlatzbuchung } from './intern/Platzbuchung'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import { Footer } from './components/Footer'
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron'
import { auth } from './components/_functions' 
import { Redirect } from 'react-router'


// const Public = () => <h3>Public</h3>
// const Protected = () => <h3>Protected</h3>
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route        exact path="/" component={Home} />
              <Route        exact path="/verein" component={Verein} />
              <Route        exact path="/mannschaften" component={Mannschaften} />
              <Route        exact path="/jugend" component={Jugend} />
              <Route        exact path="/training" component={Training} />
              <Route        exact path="/login" component={Login} /> 
              <PrivateRoute exact path="/intern/platzbuchung" component={InternPlatzbuchung} />
              <PrivateRoute exact path="/intern/home" component={InternHome} />
              <PrivateRoute exact path="/intern/history" component={InternHistory} />
              <Route exact component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </>
    );
  }
}


export default App;
