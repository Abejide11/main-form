import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './Component/Info'
import Select from './Component/Select'
import AddOn from './Component/AddOn'
import Summary from './Component/Summary'
import Thank from './Component/Thank'
function App() {
  const [count, setCount] = useState(0)

  const select = () => setCount(1)
  const addon = () => setCount(2)
  const summary = () => setCount(3)
  const thank = () => setCount(4)

  const back = () => setCount(0)
  const add = () => setCount(1)
  const sum = () => setCount(2)
  const tha = () => setCount(3)


  return (
    <>
    { count === 0 && (
      <Info onSubmitForm={select}/>

    )}
    
    { count === 1 && (
      <Select onClick={addon} goBack={back} />

    )}
    
    { count === 2 && (
      <AddOn onClick={summary} goBack={add}/>

    )}
    
    { count === 3 && (
      <Summary onClick={thank} goBack={sum}/>

    )}
    
    { count === 4 && (
       <Thank/>

    )}
    
  

      
      
      
      
     
    </>
  )
}

export default App
