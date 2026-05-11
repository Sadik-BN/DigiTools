import { Suspense, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import axios from "axios"

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
        <Suspense fallback={<div className="flex justify-center items-center"><span className="loading loading-spinner loading-xl"></span></div>}>
          <Products added={added} setAdded={setAdded} dataPromise={dataPromise}></Products>
        </Suspense>
        
      </main>
    </>
  )
}

export default App
