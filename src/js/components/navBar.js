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
              <li><Link to='#'>Family Counseling Center</Link></li>
              <li><Link to='#'>MAD SAM</Link></li>
              <li><Link to='#'>Sponsors</Link></li>
            </ul>
          </li>
          <li><Link to='#'>En Español</Link></li>
          <li><Link to='#'>Contact Us</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
