import React, { useEffect, useState } from "react";

const Maps: React.FC = () => {
  const [origemMarker, setOrigemMarker] = useState<google.maps.Marker | null>(null);
  const [destinoMarker, setDestinoMarker] = useState<google.maps.Marker | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [origem, setOrigem] = useState<string>('');
  const [destino, setDestino] = useState<string>('');
  const [consumo, setConsumo] = useState<number>(0);
  const [preco, setPreco] = useState<number>(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA8oYGuoylABQW3cH15heelFA7XISXaIP0&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);

    window.initMap = () => {
      const mapInstance = new google.maps.Map(document.getElementById('map')!, {
        center: { lat: -23.5505, lng: -46.6333 },
        zoom: 12,
      });

      setMap(mapInstance);

      mapInstance.addListener("click", (event: google.maps.MapMouseEvent) => {
        if (!origemMarker) {
          const marker = new google.maps.Marker({
            position: event.latLng,
            map: mapInstance,
          });
          setOrigemMarker(marker);
          setOrigem(`${event.latLng.lat()}, ${event.latLng.lng()}`);
        } else if (!destinoMarker) {
          const marker = new google.maps.Marker({
            position: event.latLng,
            map: mapInstance,
          });
          setDestinoMarker(marker);
          setDestino(`${event.latLng.lat()}, ${event.latLng.lng()}`);
        }
      });
    };
  }, [origemMarker, destinoMarker]);

  const calcular = () => {
    if (!origem || !destino || consumo <= 0 || preco <= 0) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    const request: google.maps.DirectionsRequest = {
      origin: origem,
      destination: destino,
      travelMode: "DRIVING",
    };

    directionsService.route(request, (result, status) => {
      if (status === "OK") {
        const distancia = result.routes[0].legs[0].distance.value / 1000;
        const consumoCombustivel = distancia / consumo;
        const valorCombustivel = consumoCombustivel * preco;

        // Exibir resultados
        alert(`Distância: ${distancia.toFixed(2)} km\nConsumo: ${consumoCombustivel.toFixed(2)} litros\nValor: R$${valorCombustivel.toFixed(2)}`);
      } else {
        alert("Não foi possível calcular a rota.");
      }
    });
  };

  return (
    <div>
      <h1>Gestão de Transporte</h1>
      <div id="map" style={{ width: "60%", height: "350px", marginBottom: "10px" }}></div>

      <form>
        <label htmlFor="origem">Origem:</label>
        <input
          type="text"
          id="origem"
          value={origem}
          onChange={(e) => setOrigem(e.target.value)}
        /> <br /><br />

        <label htmlFor="destino">Destino:</label>
        <input
          type="text"
          id="destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        /> <br /><br />

        <label htmlFor="consumo">Média de consumo de combustível (km/l):</label>
        <input
          type="number"
          id="consumo"
          value={consumo}
          onChange={(e) => setConsumo(Number(e.target.value))}
          step="any"
          min="0"
        /> <br /><br />

        <label htmlFor="preco">Preço do combustível (R$/l):</label>
        <input
          type="number"
          id="preco"
          value={preco}
          onChange={(e) => setPreco(Number(e.target.value))}
          step="any"
          min="0"
        /> <br /><br />

        <button type="button" onClick={calcular}>
          Calcular
        </button>
      </form>
    </div>
  );
};

export default Maps;
