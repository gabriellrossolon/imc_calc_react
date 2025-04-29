import React from 'react'
import Button from './Button'

const ImcTable = ({ data, imc, info, resetCalc }) => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-gray-900">
      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-8 py-10 min-w-[500px] flex flex-col items-center gap-6">
        <div className="text-center text-white border border-yellow-400 rounded-xl w-full py-4">
          <p className="text-2xl font-semibold">Seu IMC: <span className="text-yellow-400">{imc}</span></p>
          <p className="text-2xl font-semibold">Situação atual: <span className="text-yellow-400">{info}</span></p>
        </div>

        <h3 className="text-xl font-bold text-yellow-400">Confira as classificações:</h3>

        <div className="w-full">
          <div className="grid grid-cols-3 text-center text-sm font-semibold text-gray-200 pb-2 mb-8">
            <h4 className="text-xl font-semibold">Classificação</h4>
            <h4 className="text-xl font-semibold">IMC</h4>
            <h4 className="text-xl font-semibold">Obesidade</h4>
          </div>

          <div className="flex flex-col gap-3 ">
            {data.map((item) => (
              <div key={item.info} className="grid grid-cols-3 text-center text-white border-b border-gray-400">
                <p>{item.classification}</p>
                <p>{item.info}</p>
                <p>{item.obesity}</p>
              </div>
            ))}
          </div>
        </div>

        <Button action={resetCalc} text="Voltar" />
      </div>
    </div>
  )
}


export default ImcTable
