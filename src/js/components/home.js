import React from 'react'
import { Link } from 'react-router';

class Home extends React.Component {
  render () {
    return(
      <section className='homeMain'>
        <header>
          <h1>Contact Lifeline</h1>
          <h3>Dear friends, do not be surprised at the fiery ordeal that has come on you to test you,
            as though something strange were happening to you. But rejoice inasmuch as you participate in the sufferings of Christ,
            so that you may be overjoyed when his glory is revealed.
          </h3>
          <h4>1 Peter 4:12-13 NIV</h4>
          <h2>1-800-454-8336</h2>
        </header>
        <section className='motto'>
          <p>Contact Lifeline listening to and caring for people Christ's way!</p>
        </section>
        <nav>
          <ul>
            <li><p>Mission</p></li>
            <li><p>About Us</p></li>
            <li><p>Join Us</p></li>
          </ul>
        </nav>
      </section>
    )
  }
}

export default Home;
