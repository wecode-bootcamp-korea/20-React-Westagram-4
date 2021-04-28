import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginYM from './pages/jeonyongmin/Login/Login';
import MainYM from './pages/jeonyongmin/Main/Main';
import LoginJY from './pages/leejiyon/Login/Login';
import MainJY from './pages/leejiyon/Main/Main';
import LoginSM from './pages/josungmin/Login/Login';
import MainSM from './pages/josungmin/Main/Main';
import LoginYJ from './pages/limyujin/Login/Login';
import MainYJ from './pages/limyujin/Main/Main';
import LoginOJ from './pages/kwonojae/Login/Login';
import MainOJ from './pages/kwonojae/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/loginym" component={LoginYM}></Route>
          <Route exact path="/mainym" component={MainYM}></Route>
          <Route exact path="/loginym" component={LoginJY}></Route>
          <Route exact path="/mainym" component={MainJY}></Route>
          <Route exact path="/loginym" component={LoginSM}></Route>
          <Route exact path="/mainym" component={MainSM}></Route>
          <Route exact path="/loginym" component={LoginYJ}></Route>
          <Route exact path="/mainym" component={MainYJ}></Route>
          <Route exact path="/loginym" component={LoginOJ}></Route>
          <Route exact path="/mainym" component={MainOJ}></Route>
        </Switch>
      </Router>
    );
  }
}
export default Routes;