import React from 'react'
import { Link }  from 'react-router'
import $ from 'jquery'

import Footer from './footer'

class Main extends React.Component {

  componentDidMount() {
    $('#navDropDown').click(function () {
      var clicks = $(this).data('clicks');
      if (clicks) {
        $('.navHide').css( 'display', 'none');
        $(this).data("clicks", !clicks);
      } else {
        $('.navHide').css( 'display', 'block');
        $(this).data("clicks", !clicks);
      }

    }).mouseleave(function() {
      $('.navHide').css( 'display', 'none');
      $(this).data('clicks', false);
    });
  }

  render () {
    return(
      <section className='mainWrapper'>
        <nav className='mainNav'>
          <ul className='nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='programs'>Programs</Link></li>
            <li><Link to='volunteering'>Volunteering</Link></li>
            <li id='navDropDown' className ='scrollDown'>Affiliates
            <ul className='navHide'>
                <li></li>
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
        <Footer></Footer>
      </section>
    )
  }
}

export default Main;
