import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Applications } from './Applications';
import { Contact } from './Contact';
import { Services } from './Services';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import "./../src/assets/FontAwesomeIcons/Index";
import { TopBanner } from './components/TopBanner';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <TopBanner />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/apps" component={Applications} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
