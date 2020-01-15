import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link>Home</Link>
        </div>
        <div>
          <Link>About</Link>
        </div>
        <div>
          <Link>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
