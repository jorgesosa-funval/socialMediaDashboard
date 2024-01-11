import { useState } from 'react'
import './App.css'
import facebook from './assets/icon-facebook.svg'
import up from './assets/icon-up.svg'
import DashboardCardContainer from './components/DashboardCardContainer'

const data =
  [
    {
      icon: '../../assets/icon-facebook.svg',
      userName: '@nathanf',
      title: 'FOLLOWERS',
      amount: '1987',
      today: 12,
      clr: 'clr_green'
    },
    {
      icon: '../../assets/icon-twitter.svg',
      userName: '@nathanf',
      title: 'FOLLOWERS',
      amount: '1044`',
      today: 99,
      clr: 'clr_green'
    },
    {
      icon: '../../assets/icon-instagram.svg',
      userName: '@realnathanf',
      title: 'FOLLOWERS',
      amount: '11K`',
      today: 1099,
      clr: 'clr_green'
    },
    {
      icon: '../../assets/icon-twitter.svg',
      userName: '@nathanf',
      title: 'FOLLOWERS',
      amount: '1044`',
      today: 99,
      clr: 'clr_green'
    },
    {
      icon: '../../assets/icon-youtube.svg',
      userName: 'Nathan F.',
      title: 'SUBSCRIBERS',
      amount: '8239`',
      today: 144,
      clr: 'clr_red'
    },

  ]

function App() {

  return (
    <>
      <section className='dashboard'>
        <header>
          <h1>Social Media Dashboard</h1>
          <h4>Total Followers:23,004</h4>
        </header>
        <DashboardCardContainer />

        <h2>Overview - Today</h2>
        <ul className='overview_container'>
          <li className='overview_card'>

            <div className='overview_head'>
              <span>Page Views</span>
              <img src={facebook} alt="facebook-icon" />
            </div>

            <div className='data'>
              <span>87</span>

              <div>
                <img src={up} alt="" />
                <span className='clr_green'>3%</span>
              </div>

            </div>
          </li>
          <li className='overview_card'>

            <div className='overview_head'>
              <span>Page Views</span>
              <img src={facebook} alt="facebook-icon" />
            </div>

            <div className='data'>
              <span>87</span>

              <div>
                <img src={up} alt="" />
                <span className='clr_green'>3%</span>
              </div>

            </div>
          </li>
          <li className='overview_card'>

            <div className='overview_head'>
              <span>Page Views</span>
              <img src={facebook} alt="facebook-icon" />
            </div>

            <div className='data'>
              <span>87</span>

              <div>
                <img src={up} alt="" />
                <span className='clr_green'>3%</span>
              </div>

            </div>
          </li>
          <li className='overview_card'>

            <div className='overview_head'>
              <span>Page Views</span>
              <img src={facebook} alt="facebook-icon" />
            </div>

            <div className='data'>
              <span>87</span>

              <div>
                <img src={up} alt="" />
                <span className='clr_green'>3%</span>
              </div>

            </div>
          </li>
          <li className='overview_card'>

            <div className='overview_head'>
              <span>Page Views</span>
              <img src={facebook} alt="facebook-icon" />
            </div>

            <div className='data'>
              <span>87</span>

              <div>
                <img src={up} alt="" />
                <span className='clr_green'>3%</span>
              </div>

            </div>
          </li>
          <li className='overview_card'>

            <div className='overview_head'>
              <span>Page Views</span>
              <img src={facebook} alt="facebook-icon" />
            </div>

            <div className='data'>
              <span>87</span>

              <div>
                <img src={up} alt="" />
                <span className='clr_green'>3%</span>
              </div>

            </div>
          </li>
          <li className='overview_card'>

            <div className='overview_head'>
              <span>Page Views</span>
              <img src={facebook} alt="facebook-icon" />
            </div>

            <div className='data'>
              <span>87</span>

              <div>
                <img src={up} alt="" />
                <span className='clr_green'>3%</span>
              </div>

            </div>
          </li>
          <li className='overview_card'>

            <div className='overview_head'>
              <span>Page Views</span>
              <img src={facebook} alt="facebook-icon" />
            </div>

            <div className='data'>
              <span>87</span>

              <div>
                <img src={up} alt="" />
                <span className='clr_green'>3%</span>
              </div>

            </div>
          </li>
        </ul>
      </section>
    </>
  )
}

export default App
