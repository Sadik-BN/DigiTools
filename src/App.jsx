import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import axios from "axios"
import DigiTools from "./components/DigiTools/DigiTools"
import Stats from "./components/Stats/Stats"
import Banner from "./components/Banner/Banner"
import GetStarted from "./components/GetStarted/GetStarted"
import Pricing from "./components/Pricing/Pricing"

function App() {

  const getData = async () => {
    const axiosData = await axios.get('/JSON/products.json');
    return axiosData;
  }
  const dataPromise = getData();

  const [added, setAdded] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <>
      <header>
        <Navbar added={added}>

        </Navbar>
      </header>
      <main>
        <Banner></Banner>
        <Stats></Stats>
        <DigiTools added={added} setAdded={setAdded} dataPromise={dataPromise} total={total} setTotal={setTotal}></DigiTools>
        <GetStarted></GetStarted>
        <Pricing></Pricing>

      </main>
    </>
  )
}

export default App
