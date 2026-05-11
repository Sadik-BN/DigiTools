import { Suspense } from "react"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import axios from "axios"

function App() {

  const getData = async()=>{
    const axiosData = await axios.get('/JSON/products.json');
    const dataPromise = await  axiosData.data;
    return dataPromise;
  }
  const dataPromise = getData();
  return (
    <>
      <header>
        <Navbar>

        </Navbar>
      </header>
      <main>
        <Suspense fallback={<div className="flex justify-center items-center"><span className="loading loading-spinner loading-xl"></span></div>}>
          <Products dataPromise={dataPromise}></Products>
        </Suspense>
        
      </main>
    </>
  )
}

export default App
