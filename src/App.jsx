import { useState } from 'react'
import './App.css'
import facebook from './assets/icon-facebook.svg'
import instagram from './assets/icon-instagram.svg'
import up from './assets/icon-up.svg'
import down from './assets/icon-down.svg'
function App() {

  return (
    <>
      <section className='dashboard'>
        <header>
          <h1>Social Media Dashboard</h1>
          <h4>Total Followers:23,004</h4>
        </header>
        <ul className='dashboard_card_container'>
          <li className='dashboard_card'>
            <div className='username'>
              <img src={facebook} alt="facebook-icon" />
              <span>@jorgeSosa</span>
            </div>
            <div className='followers'>
              <h3>1987</h3>
              <h5>Followers</h5>
            </div>
            <div className='card_footer'>
              <img src={up} alt="Up-icon" />
              <span className='clr_green'>12 Today</span>
            </div>
          </li>
          <li className='dashboard_card'>
            <div className='username'>
              <img src={instagram} alt="facebook-icon" />
              <span>@jorgeSosa</span>
            </div>
            <div className='followers'>
              <h3>1987</h3>
              <h5>Followers</h5>
            </div>
            <div className='card_footer'>
              <img src={up} alt="Up-icon" />
              <span className='clr_green'>12 Today</span>
            </div>
          </li>
          <li className='dashboard_card'>
            <div className='username'>
              <img src={facebook} alt="facebook-icon" />
              <span>@jorgeSosa</span>
            </div>
            <div className='followers'>
              <h3>1987</h3>
              <h5>Followers</h5>
            </div>
            <div className='card_footer'>
              <img src={up} alt="Up-icon" />
              <span className='clr_green'>12 Today</span>
            </div>
          </li>
          <li className='dashboard_card'>
            <div className='username'>
              <img src={facebook} alt="facebook-icon" />
              <span>@jorgeSosa</span>
            </div>
            <div className='followers'>
              <h3>1987</h3>
              <h5>Followers</h5>
            </div>
            <div className='card_footer'>
              <img src={up} alt="Up-icon" />
              <span className='clr_green'>12 Today</span>
            </div>
          </li>

        </ul>
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
