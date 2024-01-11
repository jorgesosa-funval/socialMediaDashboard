import React from 'react'

export default function OverviewCard({ icon, title, amount, porcentage, clr,icon2 }) {
  return (
    <li className='overview_card'>

      <div className='overview_head'>
        <span>{title}</span>
        <img src={icon} alt="facebook-icon" />
      </div>

      <div className='data'>
        <span>{amount}</span>

        <div>
          <img src={icon2} alt="" />
          <span className={clr}>{porcentage}%</span>
        </div>

      </div>
    </li>
  )
}
