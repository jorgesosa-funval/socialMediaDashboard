import React from 'react'

export function DashboardCard({icon, user,followers,title,icon2,todayAmount, clr }) {
    return (
        <li className='dashboard_card'>
            <div className='username'>
                <img src={icon} alt="facebook-icon" />
                <span>{user}</span>
            </div>
            <div className='followers'>
                <h3>{followers}</h3>
                <h5>{title}</h5>
            </div>
            <div className='card_footer'>
                <img src={icon2} alt="Up-icon" />
                <span className={clr}>{todayAmount} Today</span>
            </div>
        </li>
    )
}
