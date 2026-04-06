export interface PastShow {
  id: string;
  city: string;
  date: string;
  venue: string;
  photoCount: number;
  audienceCount: string;
  testimonial?: {
    text: string;
    author: string;
    organization: string;
  };
}

export const PAST_SHOWS: PastShow[] = [
  {
    id: '1',
    city: 'Ahmedabad',
    date: 'February 2024',
    venue: 'Tagore Memorial Hall',
    photoCount: 15,
    audienceCount: '2500+',
    testimonial: {
      text: "The Ratnatraya Show isn't just an event; it's a soul-stirring experience that Ahmedabad will remember for years.",
      author: "Shri Rajesh Shah",
      organization: "Ahmedabad Jain Sangh"
    }
  },
  {
    id: '2',
    city: 'Indore',
    date: 'April 2024',
    venue: 'Abhay Prashal',
    photoCount: 12,
    audienceCount: '5000+',
    testimonial: {
      text: "Seeing 5000 people sit in silence, absorbed in Jinshasan wisdom, was a sight I'll never forget.",
      author: "Virendra Jain",
      organization: "Indore Jain Samaj"
    }
  },
  {
    id: '3',
    city: 'Jaipur',
    date: 'June 2024',
    venue: 'Birla Auditorium',
    photoCount: 8,
    audienceCount: '3000+',
    testimonial: {
      text: "A perfect blend of modern presentation and ancient values. Our youth were particularly inspired.",
      author: "Dr. Ashok Jain",
      organization: "Jaipur Shwetambar Sangh"
    }
  },
  {
    id: '4',
    city: 'Surat',
    date: 'September 2024',
    venue: 'Indoor Stadium',
    photoCount: 20,
    audienceCount: '6500+',
    testimonial: {
      text: "The energy of the dance drama combined with the wisdom of the speeches is unparalleled.",
      author: "Chetan Jain",
      organization: "Surat Jain Community"
    }
  },
   {
    id: '5',
    city: 'Indore (Return)',
    date: 'December 2024',
    venue: 'Indore Stadium',
    photoCount: 14,
    audienceCount: '8000+',
    testimonial: {
      text: "We invited them back within 8 months because the first show left such an impact.",
      author: "Sanjay Jain",
      organization: "Indore Jain Samaj"
    }
  }
];
