export interface PerformedCity {
  id: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
  audienceCount: string;
  highlight: string;
}

export const PERFORMED_CITIES: PerformedCity[] = [
  {
    id: '1',
    name: 'Aron',
    state: 'Madhya Pradesh',
    lat: 24.3560,
    lng: 77.0680,
    audienceCount: '15,000+',
    highlight: 'Grand Inaugural Show'
  },
  {
    id: '2',
    name: 'Sagar',
    state: 'Madhya Pradesh',
    lat: 23.8388,
    lng: 78.7378,
    audienceCount: '22,000+',
    highlight: 'Mega Event'
  },
  {
    id: '3',
    name: 'Mugaoli',
    state: 'Madhya Pradesh',
    lat: 24.1200,
    lng: 78.3500,
    audienceCount: '18,500+',
    highlight: 'Cultural Revival'
  },
  {
    id: '4',
    name: 'Jabalpur',
    state: 'Madhya Pradesh',
    lat: 23.1815,
    lng: 79.9864,
    audienceCount: '45,000+',
    highlight: 'Record Attendance'
  },
  {
    id: '5',
    name: 'Barua Sagar',
    state: 'Uttar Pradesh',
    lat: 25.5800,
    lng: 78.7500,
    audienceCount: '28,000+',
    highlight: 'Historic Performance'
  },
];

// Keep for backward compat
export interface RequestedCity {
  id: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
  requestCount: number;
}

export const INITIAL_REQUESTED_CITIES: RequestedCity[] = PERFORMED_CITIES.map((c, i) => ({
  id: c.id,
  name: c.name,
  state: c.state,
  lat: c.lat,
  lng: c.lng,
  requestCount: [60, 80, 40, 100, 80][i]
}));
