// MapsResultado.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MapsResultado: React.FC = () => {
  const location = useLocation();
  const [distancia, setDistancia] = useState<string>('');
  const [consumo, setConsumo] = useState<string>('');
  const [valor, setValor] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setDistancia(params.get("distancia") || '');
    setConsumo(params.get("consumo") || '');
    setValor(params.get("valor") || '');
  }, [location]);

  return (
    <div>
      <h1>Resultados do Cálculo do Transporte</h1>
      <div id="resultados">
        <p>Distância percorrida: <span style={{ fontWeight: 'bold', color: 'black' }}>{distancia}</span> km</p>
        <p>Consumo de combustível: <span style={{ fontWeight: 'bold', color: 'black' }}>{consumo}</span> litros</p>
        <p>Valor gasto com combustível: R$<span style={{ fontWeight: 'bold', color: 'black' }}>{valor}</span></p>
        <button onClick={() => window.location.href = '/'} style={{ backgroundColor: 'blue', color: '#fff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Voltar</button>
      </div>
    </div>
  );
};

export default MapsResultado;
