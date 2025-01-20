import {FC } from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1Ijoia3VsaWJhYmVua28iLCJhIjoiY2xwNTk1YmtjMWlhNTJscW95Nm5wb2JjcyJ9.WQNBVXqAFJdGRNEM0ZjLwA';

export const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: [50.4821031466235, 30.401346346977196], // starting position [lng, lat]
	zoom: 9, // starting zoom
});
