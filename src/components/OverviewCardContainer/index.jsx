import React from 'react'
import OverviewCard from '../OverviewCard'
import up from '/assets/icon-up.svg'
import down from '/assets/icon-down.svg'
export default function OverviewCardContainer({data}) {
    return (
        <ul className='overview_container'>

            {data && data.map((overview, i) =>

                <OverviewCard
                    key={i}
                    icon={overview.icon}
                    title={overview.title}
                    amount={overview.amount}
                    porcentage={overview.porcentage}
                    clr={overview.clr}
                    icon2={overview.clr == 'clr_green' ? up: down}
                />

            )}

        </ul>
    )
}
