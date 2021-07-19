import * as React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './utilities/authProvider';
class App extends React.Component {
  render() {
    return <Router>
      <AuthProvider>
        <div className="App">
          {"Authenticated"}
        </div>
      </AuthProvider>
    </Router>
  }
}

export default App;
