import React, { PropTypes } from 'react'

class MadSam extends React.Component {
  render () {
    return (
      <section className="madSamContainer">
        <h1>MAD SAM</h1>
        <section className='madSamLogo'></section>
        <section className='madSamText'>
        <h2>Our Mission</h2>
        <p>
          To bring a greater awareness to the warning signs of suicidal behavior, bring a sense of hope and strength to those considering suicide and offer support
          for loved ones left behind by this silent epidemic.
        </p>

        <h2>About Us</h2>
        <p>
          We are simply a group of passionate people with a powerful purpose- to change the number of suicides in Southern Middle Tennessee. We can be accessed through our "Mad Sam"
          Facebook page and if you would like to speak to our Public Relations Specialist- Jayson Davis, please give him a call at 931.691.0629.
        </p>
      </section>
      </section>
    )

  }
}

export default MadSam;
