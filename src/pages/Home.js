import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <>
        <main class="homepage">
          <h1 class="homeh1">Westagram React Team 4</h1>
          <ul>
            <li class="homeli">
              <Link to="/loginym">
                <h2>전용민</h2>
              </Link>
            </li>
            <li class="homeli">
              <Link to="/loginjy">
                <h2>이지연</h2>
              </Link>
            </li>
            <li class="homeli">
              <Link to="/loginsm">
                <h2>조성민</h2>
              </Link>
            </li>
            <li class="homeli">
              <Link to="/loginyj">
                <h2>임유진</h2>
              </Link>
            </li>
            <li class="homeli">
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
