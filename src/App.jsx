import { useEffect, useState } from 'react'
import './App.css'
import facebook from '/assets/icon-facebook.svg'
import up from '/assets/icon-up.svg'
import DashboardCardContainer from './components/DashboardCardContainer'
import OverviewCard from './components/OverviewCard'
import OverviewCardContainer from './components/OverviewCardContainer'



function App() {
  const data2 = [
    {
      "icon": "/assets/icon-facebook.svg",
      "title": "Page Views",
      "amount": "87",
      "porcentage": 3,
      "clr": "clr_green"
    },
    {
      "icon": "/assets/icon-facebook.svg",
      "title": "likes",
      "amount": "52",
      "porcentage": 2,
      "clr": "clr_red"
    },
    {
      "icon": "/assets/icon-instagram.svg",
      "title": "Likes",
      "amount": "5462",
      "porcentage": 2257,
      "clr": "clr_green"
    },
    {
      "icon": "/assets/icon-instagram.svg",
      "title": "Profile Views",
      "amount": "52k",
      "porcentage": 1375,
      "clr": "clr_green"
    },
    ,
    {
      "icon": "/assets/icon-twitter.svg",
      "title": "Retweets",
      "amount": "117",
      "porcentage": 303,
      "clr": "clr_green"
    },
    {
      "icon": "/assets/icon-twitter.svg",
      "title": "likes",
      "amount": "597",
      "porcentage": 553,
      "clr": "clr_green"
    },
    {
      "icon": "/assets/icon-youtube.svg",
      "title": "Likes",
      "amount": "107",
      "porcentage": 19,
      "clr": "clr_red"
    },
    {
      "icon": "/assets/icon-youtube.svg",
      "title": "Total Views",
      "amount": "1407",
      "porcentage": 12,
      "clr": "clr_red"
    },

  ]

  const [data, setData] = useState();

   async function getData() {

    const fetchData =   await fetch('data.json');

    const datajson =  await fetchData.json();

    setData(datajson)
  }

  useEffect(() => {
    getData();
  },[])

  return (
    <>
      <section className='dashboard'>
        <header>
          <h1>Social Media Dashboard</h1>
          <h4>Total Followers:23,004</h4>
        </header>
        
        <DashboardCardContainer
          data={data}
        />

        <h2>Overview - Today</h2>
         <OverviewCardContainer
          data = {data2}
         />
      </section>
    </>
  )
}

export default App
