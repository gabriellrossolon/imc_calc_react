
import { data } from './data/data'
import { useState } from 'react'

// Componentes
import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if(!weight || !height) return;
    
    const weightFloat = +weight.replace(",", ".")
    const heightFloat = +height.replace(",", ".")

    const imcResult = (weightFloat /(heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult)

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info)
      }
    })

    if(!info) return
  }

  const resetCalc = (e) => {
    e.preventDefault
    setImc("")
    setInfo("")
  }

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")

  return (
    <>
      <div className="bg-gray-900">
        {!imc ? (<ImcCalc calcImc={calcImc}/>) : (<ImcTable data={data} imc={imc} info={info} resetCalc={resetCalc}/>)}
      </div>
    </>
  )
}

export default App
