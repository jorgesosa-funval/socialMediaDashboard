import React from 'react'
import { DashboardCard } from '../DashboardCard'

import up from '/assets/icon-up.svg'
import down from '/assets/icon-down.svg'
export default function DashboardCardContainer({ data }) {

  socialmedia.clr == 'clr_green' ? true : false;

  return (
    <ul className='dashboard_card_container'>
      {
        data.map(socialmedia =>

          <DashboardCard
            icon={socialmedia.icon}
            user={socialmedia.userName}
            followers={socialmedia.amount}
            title={socialmedia.title}
            icon2={socialmedia.clr == 'clr_green' ? up : down}
            todayAmount={socialmedia.today}
            clr={socialmedia.clr}

          />

        )
      }


    </ul>
  )
}
