import React from 'react'
import { DashboardCard } from '../DashboardCard'
import facebook from '../../assets/icon-facebook.svg'
import up from '../../assets/icon-up.svg'
export default function DashboardCardContainer() {
  return (
    <ul className='dashboard_card_container'>
         <DashboardCard
            icon={facebook}
             user={'@arturo'}
            followers={'322'}
            title={'Followers'}
            icon2={up}
            todayAmount={12}
             clr={'clr_green'}

           />
            <DashboardCard
            icon={facebook}
             user={'@arturo'}
            followers={'322'}
            title={'Followers'}
            icon2={up}
            todayAmount={12}
             clr={'clr_green'}

           />
            <DashboardCard
            icon={facebook}
             user={'@arturo'}
            followers={'322'}
            title={'Followers'}
            icon2={up}
            todayAmount={12}
             clr={'clr_green'}

           />
            <DashboardCard
            icon={facebook}
             user={'@arturo'}
            followers={'322'}
            title={'Followers'}
            icon2={up}
            todayAmount={12}
             clr={'clr_green'}

           />
    </ul>
  )
}
