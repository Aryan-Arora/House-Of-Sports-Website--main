
export type SportType = 'Badminton' | 'Football' | 'Volleyball' | 'Basketball' | 'Pickleball';

export interface Venue {
  id: string;
  name: string;
  location: string;
  price: number;
  monthlyPlayers: string;
  sport: SportType;
  imageUrl: string;
}

export interface USP {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
}
