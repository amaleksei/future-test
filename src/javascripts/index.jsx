import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <div className="hello">
        <span>Hello webpack!</span>
      </div>
      <div className="description">
        <span>Boilerplate for a Webpack and React</span>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
