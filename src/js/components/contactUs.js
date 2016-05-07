import React, { PropTypes } from 'react'

class ContactUs extends React.Component {
  render () {
    return (
      <section className='contactusContainer'>
        <section className='contactusText'>
          <h1>Contact Information</h1>

          <h2>Helpline Number</h2>
          <h3><a href='tel://1.800.454.8336'>1-800-454-8336</a></h3>

          <h2>Business Line</h2>
          <h3><a href='tel://931.246.0754'>(931) 247-0754</a></h3>

          <h2>Email</h2>
          <h3><a href='mailto:support@example.com'>support@example.com</a></h3>

          <h2>FIND US ON:</h2>

          <h3><a className='facebookLink' href='https://www.facebook.com/Contact-Lifeline-of-the-Highland-Rim-195788343778294/'>FACEBOOK</a></h3>
          <h3><a className='twiiterLink' href='https://twitter.com/contact_hope'>INSTAGRAM</a></h3>
          <h3><a className='instagramLink' href='https://www.instagram.com/contactlifelinehr/'>TWITTER</a></h3>

        </section>
      </section>
    )
  }
}

export default ContactUs;
