import React, { PropTypes } from 'react'
import { Link }  from 'react-router'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <ul className='footerLinks'>

          <li className='mainLogo'>
            <img src='./img/Logo.png' />
          </li>

          <li className='pageLinks'>
            <ul>
              <span className='footerNav'>Navigation</span>
              <li><i className="fa fa-angle-double-right"></i>Home</li>
              <li><i className="fa fa-angle-double-right"></i>Programs</li>
              <li><i className="fa fa-angle-double-right"></i>Volunteer</li>
              <li><i className="fa fa-angle-double-right"></i>Contact Us</li>
              <li><i className="fa fa-angle-double-right"></i>History</li>
            </ul>
          </li>

          <li className='afilLinks'>
            <ul>
              <span className='footerNav'>Affilates</span>
              <li>
                <a href='http://www.victory4families.org/' target="_blank"><i className="fa fa-angle-double-right"></i>Family Counseling Center</a>
              </li>
              <li>
                <Link to='madsam'><i className="fa fa-angle-double-right"></i>MAD SAM</Link>
              </li>
              <li>
                <Link to='sponsors'><i className="fa fa-angle-double-right"></i>Sponsors</Link>
              </li>
            </ul>
          </li>

          <li className='fccLogo'>
            <img src='./img/familyCouncelingLogo.jpg' />
          </li>

        </ul>
      </footer>
    )};
  }

  export default Footer;
