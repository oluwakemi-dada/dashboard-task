import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav from './components/layouts/menu/SideNav';
import TopNav from './components/layouts/menu/TopNav';
import Overview from './components/overview/Overview';
import Policy from './components/policy/Policy';
import Reports from './components/reports/Reports';
import styles from './styles/App.module.scss';

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <SideNav />
        <div>
          <TopNav />
          <Switch>
            <Route exact path='/' component={Overview} />
            <Route path='/reports' component={Reports} />
            <Route path='/policy' component={Policy} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
