import React, { useState } from "react";

const Atm = () => {
  const [saldo, setSaldo] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const montosDeposito = [20, 50, 100, 200, 500, 1000];
  const montosRetiro = [50, 100, 200, 500];

  const realizarDeposito = (monto) => {
    if (monto > 5000) {
      setMensaje("No puedes depositar más de $5000.");
      return;
    }
    setSaldo(saldo + monto);
    setMensaje(`Depósito de $${monto} realizado.`);
  };

  const realizarRetiro = (monto) => {
    if (monto > 7500) {
      setMensaje("No puedes retirar más de $7500.");
      return;
    }
    if (monto > saldo) {
      setMensaje("No puedes retirar más del saldo disponible.");
      return;
    }
    setSaldo(saldo - monto);
    setMensaje(`Retiro de $${monto} realizado.`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-lg max-w-xs w-full">
        <h1 className="text-xl font-bold mb-4 text-center">
          Cajero Automático
        </h1>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Saldo disponible:</h2>
          <p className="text-2xl font-bold text-green-600">${saldo}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Realizar Depósito</h2>
          <div className="grid grid-cols-3 gap-2">
            {montosDeposito.map((monto) => (
              <button
                key={monto}
                onClick={() => realizarDeposito(monto)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                +${monto}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Realizar Retiro</h2>
          <div className="grid grid-cols-2 gap-2">
            {montosRetiro.map((monto) => (
              <button
                key={monto}
                onClick={() => realizarRetiro(monto)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                -${monto}
              </button>
            ))}
          </div>
        </div>

        {mensaje && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4">
            <p>{mensaje}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Atm;
