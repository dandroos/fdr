import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

export default function LocationMap() {
    const position = [28.609621, -13.929354]
    if (typeof window !== 'undefined') {
        return (
            <div className="border-primary border">
                
                <Map center={position} zoom={14} style={{
                    height: '20rem'
                }}>
                    <TileLayer url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGF2aWRhbmRyZXdzODIiLCJhIjoiY2pvMXFjNHVuMGQ1bDNxcWxpZjF3N2g5byJ9.EN_lvjqiVVFcoZyinEhT-A" id="mapbox.streets" />
                    <Marker position={position} style={{ zIndex: 2000 }}/>
                </Map>
            </div>
        )
    }else{
        return null
    }

}
