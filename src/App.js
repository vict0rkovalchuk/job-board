import JobBoard from './components/jobBoard/JobBoard';
import JobDetails from './components/jobDetails/JobDetails';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/job-board/">
            <JobBoard />
          </Route>
          <Route exact path="/job-board/details">
            <JobDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
