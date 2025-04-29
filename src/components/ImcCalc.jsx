import { useState } from "react"

import Button from "./Button"

function ImcCalc({ calcImc }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  }

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  }

  const handleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value)
    setHeight(updatedValue)
  }

  const handleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value)
    setWeight(updatedValue)
  }

  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center">
      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-12 min-w-[500px] flex flex-col items-center">
        <h2 className="text-4xl text-yellow-500 font-bold mb-8">Calculadora de IMC</h2>

        <form action="" id="imc-form" className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">

            <div className="flex flex-col">
              <label htmlFor="" className="text-white font-medium text-lg">Altura:</label>
              <input 
              type="text" 
              name="height" 
              id="height"
              placeholder="Exemplo 1,75"
              className="px-2 py-4 text-xl rounded bg-gray-900/70 text-white placeholder-gray-400 border border-yellow-600/20"
              onChange={(e) => handleHeightChange(e)}
              value={height}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-white font-medium text-lg">Peso:</label>
              <input
              type="text" 
              name="weight"
              id="weight"
              placeholder="Exemplo 75" 
              className="px-2 py-4 text-xl rounded bg-gray-900/70 text-white placeholder-gray-400 border border-yellow-600/20"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
              />
            </div>
          </div>

          <div className="flex justify-between w-full mt-4">
            <Button action={(e) => calcImc(e, height, weight)} text="Calcular"/>
            <Button action={clearForm} text="Limpar"/>
          </div>

        </form>
      </div>
      
    </div>
  )
}

export default ImcCalc
