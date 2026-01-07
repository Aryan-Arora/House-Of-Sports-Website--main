
import { Venue, USP, Stat } from './types';

export const VENUES: Venue[] = [
  // Badminton
  { id: 'b1', name: 'Divine', location: 'Paschim Vihar', price: 200, monthlyPlayers: '100+', sport: 'Badminton', imageUrl: 'https://images.unsplash.com/photo-1626224580194-860c3d2824fe?q=80&w=800' },
  { id: 'b2', name: 'VVDAV', location: 'Vikaspuri', price: 200, monthlyPlayers: '70+', sport: 'Badminton', imageUrl: 'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=800' },
  { id: 'b3', name: 'JLDAV', location: 'Paschim Vihar', price: 200, monthlyPlayers: '70+', sport: 'Badminton', imageUrl: 'https://images.unsplash.com/photo-1613912400585-692289656110?q=80&w=800' },
  { id: 'b4', name: 'MCL', location: 'Hari Nagar', price: 200, monthlyPlayers: '80+', sport: 'Badminton', imageUrl: 'https://images.unsplash.com/photo-1626224580194-860c3d2824fe?q=80&w=800' },
  { id: 'b5', name: 'DTEA', location: 'Janakpuri', price: 200, monthlyPlayers: '80+', sport: 'Badminton', imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800' },
  { id: 'b6', name: 'Saket S2P', location: 'Saket', price: 200, monthlyPlayers: '50+', sport: 'Badminton', imageUrl: 'https://images.unsplash.com/photo-1626224580194-860c3d2824fe?q=80&w=800' },
  { id: 'b7', name: 'East Delhi LPS', location: 'East Delhi', price: 150, monthlyPlayers: '60+', sport: 'Badminton', imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800' },
  { id: 'b8', name: 'Smashing Arena', location: 'Dilshad Garden', price: 150, monthlyPlayers: '60+', sport: 'Badminton', imageUrl: 'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=800' },
  { id: 'b9', name: 'Rohini DIPS', location: 'Rohini', price: 200, monthlyPlayers: '70+', sport: 'Badminton', imageUrl: 'https://images.unsplash.com/photo-1613912400585-692289656110?q=80&w=800' },
  { id: 'b10', name: 'Dwarka VIS/SVIS', location: 'Dwarka', price: 200, monthlyPlayers: '50+', sport: 'Badminton', imageUrl: 'https://images.unsplash.com/photo-1626224580194-860c3d2824fe?q=80&w=800' },

  // Football
  { id: 'f1', name: 'HOS Arena', location: 'Delhi', price: 190, monthlyPlayers: '100+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800' },
  { id: 'f2', name: 'Divine', location: 'Delhi', price: 250, monthlyPlayers: '100+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800' },
  { id: 'f3', name: 'Naraina', location: 'Naraina', price: 250, monthlyPlayers: '40+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=800' },
  { id: 'f4', name: 'Crescent Pitampura', location: 'Pitampura', price: 250, monthlyPlayers: '30+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800' },
  { id: 'f5', name: 'DIS Dwarka', location: 'Dwarka', price: 200, monthlyPlayers: '100+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800' },
  { id: 'f6', name: 'Dwarka Complex', location: 'Dwarka', price: 280, monthlyPlayers: '80+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=800' },
  { id: 'f7', name: 'Qgis', location: 'East Delhi', price: 180, monthlyPlayers: '40+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800' },
  { id: 'f8', name: 'Clayground Karkardooma', location: 'Karkardooma', price: 200, monthlyPlayers: '20+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800' },
  { id: 'f9', name: 'Hari Nagar Claygrounds', location: 'Hari Nagar', price: 250, monthlyPlayers: '70+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=800' },
  { id: 'f10', name: 'Summerfields GK1 & GK2', location: 'GK', price: 250, monthlyPlayers: '30+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800' },
  { id: 'f11', name: 'Pitampura SD Public', location: 'Pitampura', price: 250, monthlyPlayers: '30+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800' },
  { id: 'f12', name: 'Paramount Dwarka', location: 'Dwarka', price: 200, monthlyPlayers: '80+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=800' },
  { id: 'f13', name: 'OPG World School', location: 'Delhi', price: 200, monthlyPlayers: '20+', sport: 'Football', imageUrl: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800' },

  // Volleyball
  { id: 'v1', name: 'St Frobel', location: 'Paschim Vihar', price: 150, monthlyPlayers: '20+', sport: 'Volleyball', imageUrl: 'https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=800' },
  { id: 'v2', name: 'LPS', location: 'East Delhi', price: 150, monthlyPlayers: '20+', sport: 'Volleyball', imageUrl: 'https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=800' },
  { id: 'v3', name: 'St. Froebel (Special)', location: 'Delhi', price: 150, monthlyPlayers: '20+', sport: 'Volleyball', imageUrl: 'https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=800' },
  { id: 'v4', name: 'Crescent Public School', location: 'Delhi', price: 150, monthlyPlayers: '20+', sport: 'Volleyball', imageUrl: 'https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=800' },

  // Basketball
  { id: 'bb1', name: 'St. Froebel', location: 'Delhi', price: 150, monthlyPlayers: '30+', sport: 'Basketball', imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800' },
  { id: 'bb2', name: 'Shiv Modern', location: 'Delhi', price: 150, monthlyPlayers: '20+', sport: 'Basketball', imageUrl: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800' },
  { id: 'bb3', name: 'Crescent Public', location: 'Delhi', price: 150, monthlyPlayers: '10+', sport: 'Basketball', imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800' },

  // Pickleball
  { id: 'p1', name: 'Maxfort School', location: 'Paschim Vihar', price: 250, monthlyPlayers: '10+', sport: 'Pickleball', imageUrl: 'https://images.unsplash.com/photo-1626224580194-860c3d2824fe?q=80&w=800' },
  { id: 'p2', name: 'Elite Pickleball', location: 'Train High Gym', price: 250, monthlyPlayers: '10+', sport: 'Pickleball', imageUrl: 'https://images.unsplash.com/photo-1613912400585-692289656110?q=80&w=800' },
];

export const USPS: USP[] = [
  { title: 'Community-First Model', icon: 'Users', description: 'HOS is not just a booking platform—it’s a sports community where players return regularly and grow together.' },
  { title: 'Structured Yet Flexible', icon: 'Layout', description: 'From casual pickups to competitive matches, players can choose how serious or relaxed they want their game to be.' },
  { title: 'Fair Play & Discipline', icon: 'ShieldCheck', description: 'Strong emphasis on sportsmanship, safety, and respect, both on and off the field.' },
  { title: 'Accessible for All', icon: 'Zap', description: 'Beginners, intermediates, and advanced players all have space within the HOS ecosystem.' },
  { title: 'Player-Driven Growth', icon: 'TrendingUp', description: 'Teams, captains, and regular players are actively involved in shaping games and experiences.' },
];

export const STATS: Stat[] = [
  { label: 'Active Players', value: '500+' },
  { label: 'Weekly Games', value: '40+' },
  { label: 'Verified Venues', value: '30+' },
  { label: 'Community Rating', value: '4.9/5' },
];
