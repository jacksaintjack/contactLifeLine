import React from 'react'
import { Link } from 'react-router';
import ToggleDisplay from 'react-toggle-display';


class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isDisplayedOne: false,
      isDisplayedTwo: false,
      isDisplayedThree: false
    }
    this.toggleInfoOne = this.toggleInfoOne.bind(this),
    this.toggleInfoTwo = this.toggleInfoTwo.bind(this),
    this.toggleInfoThree = this.toggleInfoThree.bind(this)
  }
  //Toggle state functions
  toggleInfoOne(event) {
    event.preventDefault();
      this.setState({
        isDisplayedOne: true,
        isDisplayedTwo: false,
        isDisplayedThree: false
      });
  }
  toggleInfoTwo(event) {
    event.preventDefault();
      this.setState({
        isDisplayedOne: false,
        isDisplayedTwo: true,
        isDisplayedThree: false
      });
  }
  toggleInfoThree(event) {
    event.preventDefault();
      this.setState({
        isDisplayedOne: false,
        isDisplayedTwo: false,
        isDisplayedThree: true
      });
  }

  render () {
    var boldStyle = {
      fontweight: 'bold'
    };
    return(
      <section className='homeMain'>
        <header>
          <h1>Contact Lifeline</h1>
          <h3>Dear friends, do not be surprised at the fiery ordeal that has come on you to test you,
            as though something strange were happening to you. But rejoice inasmuch as you participate in the sufferings of Christ,
            so that you may be overjoyed when his glory is revealed.
          </h3>
          <h4>1 Peter 4:12-13 NIV</h4>
          <a className='phoneNumber' href='tel://1.800.454.8336'><h2>1-800-454-8336</h2></a>
        </header>
        <section className='motto'>
          <p>Contact Lifeline listening to and caring for people Christ's way!</p>
        </section>
        <nav>
          <ul>
            <li className='missionBox' onClick={this.toggleInfoOne}>
              <div className='shadowDivOne'>
                <p>Mission</p>
              </div>
            </li>

            <li className='aboutBox' onClick={this.toggleInfoTwo}>
              <div className='shadowDivTwo'>
                <p>About Us</p>
              </div>
            </li>

            <li className='joinBox' onClick={this.toggleInfoThree}>
              <div className='shadowDivThree'>
                <p>Join Us</p>
              </div>
            </li>
          </ul>
        </nav>

        <ToggleDisplay show={this.state.isDisplayedOne}>
          <article>
            <p>
              It is the Christian ministry of Contact Lifeline of the Highland Rim, as a nonprofit organization with services free of charge to all callers,
              to respond 24 hours daily to the emotional needs of callers with confidential, non-judgmental, active listening,
              by fostering self-directed resolution, referrals or intervention through telephone with Contact trained volunteers.
            </p>
          </article>
        </ToggleDisplay>

        <ToggleDisplay show={this.state.isDisplayedTwo}>
          <article >
            <p>
                Contact Lifeline of the Highland Rim, a program of the Family Counseling Center of Middle Tennessee,
                is an accredited Christian local 24-hour helpline service free to residents of Bedford, Coffee, Franklin, Grundy, Lincoln, Moore and Warren counties.
                We offer crisis intervention, referral, and reassurance services to all who are in need through our 24-hour Crisis line, Teen2Teen Crisis line,and Reassurance program....
                you need someone to listen; <span style={boldStyle}>WE ARE HERE FOR YOU</span>!
            </p>
          </article>
        </ToggleDisplay>

        <ToggleDisplay show={this.state.isDisplayedThree}>
          <article>
            <p>
              If this sounds like something you would like to get involved in, give us a call at
              <a href='tel://931.247.0754'> (931) 247-0754</a>.
              We would love to add you to our ever growing family of trained listeners. I promise you, when you start being the one who picks up that line when it rings
              , and reaching out to those who are troubled, your heart will soar. Just knowing that you were there and was able to listen and encourage someone to make it
               through one more day is a feeling you won’t find anywhere else.
            </p>
          </article>
        </ToggleDisplay>

      </section>
    )
  }
}

export default Home;
