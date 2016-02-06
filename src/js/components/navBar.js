import React from 'react'
import { Link }  from 'react-router'

class NavBar extends React.Component {
  render () {
    return(
      <nav>
        <ul>
          <li><Link to='#'>Home</Link></li>
          <li><Link to='#'>Programs</Link></li>
          <li><Link to='#'>Volunteering</Link></li>
          <li><Link to='#'>Gallery</Link></li>
          <li className='scrollDown'>Affilates
            <ul className='navHide'>
              <li><a href='http://www.victory4families.org/'>Family Counseling Center</a></li>
              <li><Link to='madsam'>MAD SAM</Link></li>
              <li><Link to='sponsors'>Sponsors</Link></li>
            </ul>
          </li>
          <li><Link to='espanol'>En Español</Link></li>
          <li><Link to='contactus'>Contact Us</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
