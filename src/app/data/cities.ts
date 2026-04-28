export interface PerformedCity {
  id: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
  highlight: string;
  folder?: string;
  images?: string[];
  videos?: string[];
}

export const PERFORMED_CITIES: PerformedCity[] = [
  {
    id: '1',
    name: 'Aron',
    state: 'Madhya Pradesh',
    lat: 24.3560,
    lng: 77.0680,
    highlight: 'Grand Inaugural Show',
    folder: 'aron',
    images: ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG', '8.JPG', '9.JPG', '10.JPG', '11.JPG', '12.JPG', '13.JPG', '14.JPG', '15.JPG', '16.JPG', '17.JPG', '18.JPG'],
    videos: ['v1.mp4', 'v2.mp4']
  },
  {
    id: '2',
    name: 'Sagar',
    state: 'Madhya Pradesh',
    lat: 23.8388,
    lng: 78.7378,
    highlight: 'Mega Event',
    folder: 'sagar',
    images: ['IMG_2532.PNG', 'SAM00002.JPG', 'SAM00146.JPG', 'SAM00266.JPG', 'SAM00297.JPG', 'SAM00366.JPG', 'SAM06144.JPG', 'SAM06186.JPG', 'SAM06191.JPG', 'SAM06198.JPG', 'SAM06230.JPG', 'SAM06231.JPG', 'SAM06321.JPG', 'SAM06440.JPG', 'SAM06464.JPG', 'SAM06469.JPG', 'SAM06503.JPG', 'SAM06520.JPG', 'SAM06694.JPG'],
    videos: []
  },
  {
    id: '3',
    name: 'Mugaoli',
    state: 'Madhya Pradesh',
    lat: 24.1200,
    lng: 78.3500,
    highlight: 'Cultural Revival',
    folder: 'mugaoli',
    images: [],
    videos: ['mnv_after_movie_2.mp4']
  },
  {
    id: '4',
    name: 'Jabalpur',
    state: 'Madhya Pradesh',
    lat: 23.1815,
    lng: 79.9864,
    highlight: 'Record Attendance',
    folder: 'jabalpur',
    images: ['JBP_01.GIF', 'JBP_02.GIF', 'JBP_03.GIF', 'JBP_04.GIF', 'JBP_05.GIF', 'JBP_06.GIF', 'JBP_07.GIF', 'JBP_08.GIF', 'JBP_09.GIF', 'SID01429.JPEG', 'SID02175.JPEG', 'SID02394.JPEG', 'SID02397.JPEG'],
    videos: ['rt_jbl_reel_3.mp4', 'rt_jbl_v2_3.mp4', 'sequence_04_3.mp4', 'sequence_5.mp4']
  },
  {
    id: '5',
    name: 'Barua Sagar',
    state: 'Uttar Pradesh',
    lat: 25.5800,
    lng: 78.7500,
    highlight: 'Historic Performance',
    folder: '',
    images: [],
    videos: []
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
