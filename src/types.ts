export interface Review {
  reviewer: Person;
  score: 1 | 2 | 3 | 4 | 5;
  review: string;
  source: ReviewSources;
  link: string;
}

interface Person {
  img: string;
  fullName: string;
}

type ReviewSources = 'google' | 'doctoralia';

export interface Service {
  title: string;
  onlinePrice: number;
  onlineTimeInMinutes: number;
  inPersonPrice: number;
  inPersonTimeInMinutes: number;
  priceDisclaimer?: string;
  description: string;
  details: string[];
  summaryDetails: string[];
}

export interface BlogPost {
  title: string;
  date: string;
  summary: string;
  thumbnail: string;
}

export interface Thumbnail {
  src: string;
  width: number;
  height: number;
  format: string;
}
