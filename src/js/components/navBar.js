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
            <li><Link to='espanol'>En Español</Link></li>
            <li><Link to='contactus'>Contact Us</Link></li>
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
