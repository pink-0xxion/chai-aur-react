import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-300'>chai</h1>
      {/* <Header />
      <Home />
      <Footer /> */}
    </>
  )
}

export default App
