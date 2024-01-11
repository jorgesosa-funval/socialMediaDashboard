import { useEffect, useState } from 'react'
import './App.css'
import facebook from '/assets/icon-facebook.svg'
import up from '/assets/icon-up.svg'
import DashboardCardContainer from './components/DashboardCardContainer'
import OverviewCard from './components/OverviewCard'
import OverviewCardContainer from './components/OverviewCardContainer'
import Inputs from './components/inputs'



function App() {
  const [data, setData] = useState([]);
  const [overviews, setOverviews] = useState([]);
  const [porcentages, setPorcentages] = useState(0);

  async function getData() {

    const fetchData = await fetch('data.json');

    const datajson = await fetchData.json();

    setData(datajson)
  }

  const joseLuisMorales = async () => {
    const fetchData = await fetch('overviews.json');
    const jsonData = await fetchData.json();
    setOverviews(jsonData);
  }

  useEffect(() => {
    getData();
    joseLuisMorales();
  }, [])

  return (
    <>
      <section className='dashboard'>
        <header>
          <h1>Social Media Dashboard</h1>
          <h4>Total Followers:23,004</h4>
        </header>

        {/* <DashboardCardContainer
          data={data}
        />

        <h2>Overview - Today</h2>
        <OverviewCardContainer
          data={overviews}
        /> */}


        <Inputs
          valor={25}
          clicked={(e)=>setPorcentages( porcentages + parseInt(e.target.value))}
        />
        <Inputs
          valor={30}
          clicked={(e)=>setPorcentages( porcentages + parseInt(e.target.value))}
        />
        <Inputs
          valor={32}
          clicked={(e)=>setPorcentages( porcentages + parseInt(e.target.value))}
        />
        <Inputs
          valor={80}
          clicked={(e)=>setPorcentages( porcentages + parseInt(e.target.value))}
        />
        <Inputs
          valor={23}
          clicked={(e)=>setPorcentages( porcentages + parseInt(e.target.value))}
        />
        <br/>
        <input type="text" name="" id="" value={porcentages}/>
      </section>
    </>
  )
}

export default App
