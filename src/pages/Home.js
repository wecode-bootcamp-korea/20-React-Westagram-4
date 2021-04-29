import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <>
        <main className="homepage">
          <h1 className="homeh1">Westagram React Team 4</h1>
          <ul>
            <li className="homeli">
              <Link to="/loginym">
                <h2>전용민</h2>
              </Link>
            </li>
            <li className="homeli">
              <Link to="/loginjy">
                <h2>이지연</h2>
              </Link>
            </li>
            <li className="homeli">
              <Link to="/loginsm">
                <h2>조성민</h2>
              </Link>
            </li>
            <li className="homeli">
              <Link to="/loginyj">
                <h2>임유진</h2>
              </Link>
            </li>
            <li className="homeli">
              <Link to="/loginoj">
                <h2>권오재</h2>
              </Link>
            </li>
          </ul>
        </main>
      </>
    );
  }
}

export default Home;
