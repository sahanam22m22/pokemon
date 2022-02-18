// Please do not delete or rename app.jsx , if you do please update in config.js
import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list/List.jsx'

class App extends React.Component {

  render() {
    return (
      <div>
      	<List/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
