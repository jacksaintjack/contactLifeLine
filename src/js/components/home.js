import React from 'react'
import { Link } from 'react-router';

class Home extends React.Component {
  render () {
    return(
      <section className='homeMain'>
        <ul>
          <a href='https://www.facebook.com/Contact-Lifeline-of-the-Highland-Rim-195788343778294/' target="_blank"> <li className="facebook"><i className="fa fa-facebook"></i></li></a>
          <a href='https://twitter.com/contact_hope' target="_blank"> <li className="twitter"><i className="fa fa-twitter"></i></li> </a>
          <a href='https://www.instagram.com/contactlifelinehr/' target="_blank"><li className="instagram"><i className="fa fa-instagram"></i></li> </a>
        </ul>
        <header>
          <h1></h1>
          <h3></h3>
          <h2></h2>
        </header>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </section>
    )
  }
}

export default Home;
