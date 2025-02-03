import React, { useState, useRef, useEffect } from 'react';
import L, { LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './maps.css';

const MapComponent: React.FC = () => {
    const [origem, setOrigem] = useState<L.LatLng | null>(null);
    const [destino, setDestino] = useState<L.LatLng | null>(null);
    const [tempo, setTempo] = useState<string | null>(null);

    const mapRef = useRef<L.Map | null>(null);

    const calcularRota = () => {
        if (!origem || !destino) {
            alert("Selecione origem e destino no mapa!");
            return;
        }

        const apiKey = "5b3ce3597851110001cf62480bba3edd33ae4ad3a48f7c9781d05aee";
        const start = `${origem.lng},${origem.lat}`;
        const end = `${destino.lng},${destino.lat}`;

        fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start}&end=${end}`)
            .then(response => response.json())
            .then(data => {
                if (data.routes && data.routes.length > 0) {
                    const tempoCalculado = Math.round(data.routes[0].duration / 60);
                    setTempo(`${tempoCalculado} minutos`);
                } else {
                    alert("Erro ao calcular rota.");
                }
            })
            .catch(error => console.error("Erro:", error));
    };

    useEffect(() => {
        if (!mapRef.current && document.getElementById('map')) {
            mapRef.current = L.map('map').setView([-23.55, -46.63], 12);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(mapRef.current);

            mapRef.current.on('click', (e: LeafletMouseEvent) => {
                if (!mapRef.current) return;
                if (!origem) {
                    setOrigem(e.latlng);
                    L.marker(e.latlng).addTo(mapRef.current).bindPopup("Origem").openPopup();
                } else if (!destino) {
                    setDestino(e.latlng);
                    L.marker(e.latlng).addTo(mapRef.current).bindPopup("Destino").openPopup();
                } else {
                    alert("Origem e destino já foram selecionados. Clique em 'Calcular Rota'.");
                }
            });
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <div>
            <h2>Selecione a origem e o destino no mapa</h2>
            <div id="map" style={{ height: '400px', width: '100%', zIndex: 1 }}></div>
            <button onClick={calcularRota}>Calcular Rota</button>
            {tempo && <p>Tempo de viagem: {tempo}</p>}
        </div>
    );
};

export default MapComponent;