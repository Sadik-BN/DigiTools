import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import axios from "axios"
import DigiTools from "./components/DigiTools/DigiTools"

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
        <DigiTools added={added} setAdded={setAdded} dataPromise={dataPromise} total={total} setTotal={setTotal}></DigiTools>

      </main>
    </>
  )
}

export default App
