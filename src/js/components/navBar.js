import React from 'react'
import { Link }  from 'react-router'

class NavBar extends React.Component {
  render () {
    return(
      <section className='mainWrapper'>
        <nav className='mainNav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='programs'>Programs</Link></li>
            <li><Link to='volunteering'>Volunteering</Link></li>
            <li className='scrollDown'>Affilates
              <ul className='navHide'>
                <li><a href='http://www.victory4families.org/' target="_blank">Family Counseling Center</a></li>
                <li><Link to='madsam'>MAD SAM</Link></li>
                <li><Link to='sponsors'>Sponsors</Link></li>
              </ul>
            </li>
            <li><Link to='contactus'>Contact Us</Link></li>
            <li><Link to='OurHistory'>History</Link></li>
            <li className='socialMediaIcons'>
              <ul>
                <a href='https://www.facebook.com/Contact-Lifeline-of-the-Highland-Rim-195788343778294/' target="_blank"> <li className="facebook"><i className="fa fa-facebook"></i></li></a>
                <a href='https://twitter.com/contact_hope' target="_blank"> <li className="twitter"><i className="fa fa-twitter"></i></li> </a>
                <a href='https://www.instagram.com/contactlifelinehr/' target="_blank"><li className="instagram"><i className="fa fa-instagram"></i></li> </a>
              </ul>
            </li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
      </section>
    )
  }
}

export default NavBar;
