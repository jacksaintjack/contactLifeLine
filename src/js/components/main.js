import React from 'react'
import { Link }  from 'react-router'
import $ from 'jquery'

import Footer from './footer'

class Main extends React.Component {
  componentDidMount() {
    $('#navDropDown').click(function () {
      $(".navHide").is(":hidden") ? $(".navHide").slideDown() : $(".navHide").slideUp("fast");
    });
    $(document).click(function(event) {
      if(!$(event.target).closest('#navDropDown').length && !$(event.target).is('#navDropDown')) {
          if($('.navHide').is(":visible")) {
              $('.navHide').slideUp("fast");
          }
      }
  });

    $('#mobileNav').click(function () {
      $(".mobileMenu").is(":hidden") ? $(".mobileMenu").slideDown() : $(".mobileMenu").slideUp("fast");
    });
    $(document).click(function(event) {
      if(!$(event.target).closest('#mobileNav').length && !$(event.target).is('#mobileNav')) {
          if($('.mobileMenu').is(":visible")) {
              $('.mobileMenu').slideUp("fast");
          }
      }
  });
}
  render () {
    return(
      <section className='mainWrapper'>
        <nav className='mainNav'>
          <ul className='nav'>

            <li id='mobileNav' className='mobileNav'>
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            <ul className='mobileMenu'>
              <Link id='homeMobile' to='/'><li>Home</li></Link>
              <Link id='programsMobile' to='programs'><li>Programs</li></Link>
              <Link id='volunteerMobile' to='volunteering'><li>Volunteering</li></Link>
              <Link id='contactusMobile' to='contactus'><li>Contact Us</li></Link>
              <Link id='OurHistoryMobile' to='OurHistory'><li>History</li></Link>
              <a href='http://www.victory4families.org/' target="_blank"><li>Family Counseling Center</li></a>
              <Link id='madsamMobile' to='madsam'><li>MAD SAM</li></Link>
              <Link id='sponsorsMobile' to='sponsors'><li>Sponsors</li></Link>
            </ul>
          </li>

          <li><Link to='/'>Home</Link></li>
          <li><Link to='programs'>Programs</Link></li>
          <li><Link to='volunteering'>Volunteering</Link></li>
          <li id='navDropDown' className ='scrollDown'>Affiliates
            <ul className='navHide'>
              <li><a href='http://www.victory4families.org/' target="_blank"><i className="fa fa-angle-double-right"></i> Family Counseling Center</a></li>
              <li><i className="fa fa-angle-double-right"></i><Link to='madsam'> MAD SAM</Link></li>
              <li><i className="fa fa-angle-double-right"></i><Link to='sponsors'> Sponsors</Link></li>
            </ul>
          </li>
          <li><Link to='contactus'>Contact Us</Link></li>
          <li><Link to='OurHistory'>History</Link></li>
          <li className='socialMediaIcons'>
            <ul>
              <a href='https://www.facebook.com/Contact-Lifeline-of-the-Highland-Rim-195788343778294/' target="_blank"> <li className="facebook"><i className="fa fa-facebook"></i></li></a>
              <a href='https://twitter.com/contact_hope' target="_blank"> <li className="twitter"><i className="fa fa-twitter"></i></li> </a>
              <a href='https://www.instagram.com/contactlifelinehr/' target="_blank"><li className="instagram"><i className="fa fa-instagram"></i></li></a>
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
