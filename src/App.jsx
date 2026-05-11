import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import axios from "axios"
import DigiTools from "./components/DigiTools/DigiTools"

function App() {

  const getData = async()=>{
    const axiosData = await axios.get('/JSON/products.json');
    return axiosData;
  }
  const dataPromise = getData();

  const [added,setAdded] = useState([]);

  return (
    <>
      <header>
        <Navbar added={added}>

        </Navbar>
      </header>
      <main>
        <DigiTools added={added} setAdded={setAdded} dataPromise={dataPromise}></DigiTools>
        
      </main>
    </>
  )
}

export default App
