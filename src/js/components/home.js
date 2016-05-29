import React from 'react'
import { Link } from 'react-router';
import ToggleDisplay from 'react-toggle-display';
import $ from 'jquery'


class Home extends React.Component {
  componentDidMount() {
    $('.missionBox').click(function () {
      $('#missionArticle').fadeIn('slow');
      $('#aboutArticle').css('display', 'none');
      $('#joinArticle').css('display', 'none');
    });

    $('.aboutBox').click(function () {
      $('#aboutArticle').fadeIn('slow');
      $('#missionArticle').css('display', 'none');
      $('#joinArticle').css('display', 'none');
    });

    $('.joinBox').click(function () {
      $('#joinArticle').fadeIn('slow');
      $('#aboutArticle').css('display', 'none');
      $('#missionArticle').css('display', 'none');
    });

  }

  render () {
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

        <section className='infoNav'>
          <nav>
            <ul>
              <li className='missionBox'>
                <div className='shadowDivOne'>
                  <p>Mission</p>
                </div>
              </li>

              <li className='aboutBox'>
                <div className='shadowDivTwo'>
                  <p>About Us</p>
                </div>
              </li>

              <li className='joinBox'>
                <div className='shadowDivThree'>
                  <p>Join Us</p>
                </div>
              </li>
            </ul>
          </nav>

            <article id='missionArticle'>
              <p>
                It is the Christian ministry of Contact Lifeline of the Highland Rim, as a nonprofit organization with services free of charge to all callers,
                to respond 24 hours daily to the emotional needs of callers with confidential, non-judgmental, active listening,
                by fostering self-directed resolution, referrals or intervention through telephone with Contact trained volunteers.
              </p>
            </article>

            <article id='aboutArticle'>
              <p>
                  Contact Lifeline of the Highland Rim, a program of the Family Counseling Center of Middle Tennessee,
                  is an accredited Christian local 24-hour helpline service free to residents of Bedford, Coffee, Franklin, Grundy, Lincoln, Moore and Warren counties.
                  We offer crisis intervention, referral, and reassurance services to all who are in need through our 24-hour Crisis line, Teen2Teen Crisis line,and Reassurance program....
                  you need someone to listen.
                  <span>WE ARE HERE FOR YOU!</span>
              </p>
            </article>

            <article id='joinArticle'>
              <p>
                If this sounds like something you would like to get involved in, give us a call at
                <a href='tel://931.247.0754'> (931) 247-0754</a>.
                We would love to add you to our ever growing family of trained listeners. I promise you, when you start being the one who picks up that line when it rings
                , and reaching out to those who are troubled, your heart will soar. Just knowing that you were there and was able to listen and encourage someone to make it
                 through one more day is a feeling you won’t find anywhere else.
              </p>
            </article>
        </section>
      </section>
    )
  }
}

export default Home;
