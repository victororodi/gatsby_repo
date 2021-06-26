import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import bbox from "@turf/bbox"
import { multiPoint } from "@turf/helpers"
import Markers from "./markers"
import "mapbox-gl/dist/mapbox-gl.css"

const MAPBOX_TOKEN = "pk.eyJ1Ijoidmlja29yb2RpIiwiYSI6ImNraTczMHYyeDA0Z2YydXA5eXp5MmR2NHYifQ.RGYKEr9Z2pe-IB6SNFsTeQ"
const places = [
    {
        name: "Empire State Building",
        longitude: 39.723039,
        latitude: -4.017999,
    },
    {
        name: "Birch Coffee",
        longitude: 39.723039,
        latitude: -4.017999,
    },
    {
        name: "B&H",
        longitude: 39.723039,
        latitude: -4.017999,
    },
]
const mapContainerStyle = {
    width:"100%",
    height: "70%",
}

const Map = () => {
    const mapContainerRef = useRef(null)

    const [map, setMap] = useState(null)

    useEffect(() => {
    const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        accessToken: MAPBOX_TOKEN,
        style: "mapbox://styles/mapbox/streets-v11",
      // Empire State Building [lng, lat]
        center: [39.723039, -4.017999],
        zoom: 16,
    })
    map.addControl(new mapboxgl.NavigationControl(), "top-right")
    if (!map) return

    if (places.length !== 0) {
      const coords = []
      places.forEach(place => {
        coords.push([place.longitude, place.latitude])
      })
      const feature = multiPoint(coords)
      const box = bbox(feature)

      map.fitBounds(
        [
          [box[0], box[1]],
          [box[2], box[3]],
        ],
        {
          padding: 20,
          maxZoom: 16,
          duration: 2000,
        }
      )
    } else {
      map.easeTo({
        center: [39.723039, -4.017999],
        zoom: 16,
        duration: 2000,
      })
    }
}, [map])

    return (
    <div ref={mapContainerRef} style={mapContainerStyle}>
        {places && map && <Markers map={map} places={places}/>}
        </div>
        )
}

export default Map