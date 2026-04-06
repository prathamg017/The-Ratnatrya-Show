'use client';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { RequestedCity } from '../data/cities';

interface MapProps {
    cities: RequestedCity[];
}

// Sub-component to ensure map state is available before rendering layers
function MapLayers({ cities }: { cities: RequestedCity[] }) {
    const map = useMap();
    const [ready, setReady] = useState(false);
    
    // We wait for one cycle to ensure Leaflet's internal panes are truly ready
    useEffect(() => {
        if (map) {
            // Force a resize to ensure container is correct
            map.invalidateSize();
            // Small delay to ensure panes are initialized
            const timer = setTimeout(() => setReady(true), 100);
            return () => clearTimeout(timer);
        }
    }, [map]);

    if (!ready) return null;

    return (
        <>
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {/* Outer glow ring */}
            {cities.map((city) => (
                <CircleMarker
                    key={`outer-${city.id}`}
                    center={[city.lat, city.lng]}
                    radius={24}
                    fillColor="#D4AF37"
                    color="#D4AF37"
                    weight={1}
                    opacity={0.3}
                    fillOpacity={0.12}
                />
            ))}
            {/* Inner gold dot with label */}
            {cities.map((city) => (
                <CircleMarker
                    key={`inner-${city.id}`}
                    center={[city.lat, city.lng]}
                    radius={9}
                    fillColor="#D4AF37"
                    color="#8B1538"
                    weight={2.5}
                    opacity={1}
                    fillOpacity={1}
                >
                    <Tooltip
                        direction="top"
                        offset={[0, -16]}
                        opacity={1}
                        permanent
                    >
                        <div style={{
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: 700,
                            color: '#722F37',
                            fontSize: '12px',
                            padding: '1px 6px',
                            whiteSpace: 'nowrap'
                        }}>
                            {city.name}
                        </div>
                    </Tooltip>
                    <Popup>
                        <div style={{ textAlign: 'center', padding: '4px 8px', minWidth: 160 }}>
                            <div style={{ fontFamily: 'Playfair Display, serif', color: '#722F37', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>
                                {city.name}, {city.state}
                            </div>
                            <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, color: '#D4AF37' }}>
                                Ratnatraya Performed Here
                            </div>
                        </div>
                    </Popup>
                </CircleMarker>
            ))}
        </>
    );
}

export default function MapComponent({ cities }: MapProps) {
    const [mounted, setMounted] = useState(false);
    const center: [number, number] = [24.0, 78.5];

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <MapContainer
            center={center}
            zoom={6}
            scrollWheelZoom={false}
            zoomControl={false}
            style={{ height: '100%', width: '100%', background: '#1a0a10' }}
        >
            <MapLayers cities={cities} />
        </MapContainer>
    );
}
