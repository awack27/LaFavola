export const restaurant = {
  name: 'La Favola',
  tagline: 'Pizza Napoletana & Catering',
  subtitle: 'Handgemacht, traditionsbewusst und mit viel Liebe im Feuer gebacken.',
  address: 'Deutschland',
  phone: '+49 000 000000',
  email: 'info@lafavolajs.de',
  website: 'www.lafavolajs.de',
  hours: [
    { day: 'Montag', time: 'Geschlossen' },
    { day: 'Dienstag \u2013 Donnerstag', time: '12:00 \u2013 22:30' },
    { day: 'Freitag \u2013 Samstag', time: '12:00 \u2013 23:30' },
    { day: 'Sonntag', time: '12:00 \u2013 22:00' },
  ],
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'classic' | 'specialty' | 'vegan';
  image: string;
  popular?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: 'margherita',
    name: 'Margherita D.O.P.',
    description: 'San Marzano tomato, fior di latte mozzarella, fresh basil, extra virgin olive oil',
    price: 12,
    category: 'classic',
    image: 'https://images.pexels.com/photos/35760006/pexels-photo-35760006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popular: true,
  },
  {
    id: 'marinara',
    name: 'Marinara',
    description: 'San Marzano tomato, garlic, oregano, extra virgin olive oil \u2014 no cheese',
    price: 9,
    category: 'classic',
    image: 'https://images.pexels.com/photos/12096782/pexels-photo-12096782.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'diavola',
    name: 'Diavola',
    description: 'Spicy salami, San Marzano tomato, fior di latte, chili oil, fresh basil',
    price: 14,
    category: 'specialty',
    image: 'https://images.pexels.com/photos/31450847/pexels-photo-31450847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popular: true,
  },
  {
    id: 'prosciutto',
    name: 'Prosciutto e Rucola',
    description: 'San Marzano tomato, fior di latte, prosciutto di Parma, wild arugula, shaved Parmigiano',
    price: 16,
    category: 'specialty',
    image: 'https://images.pexels.com/photos/14866675/pexels-photo-14866675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'funghi',
    name: 'Funghi e Tartufo',
    description: 'Cremini mushrooms, fior di latte, black truffle cream, fresh thyme, olive oil',
    price: 18,
    category: 'specialty',
    image: 'https://images.pexels.com/photos/5903173/pexels-photo-5903173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'vegetariana',
    name: 'Orto del Contadino',
    description: 'San Marzano tomato, grilled seasonal vegetables, vegan mozzarella, basil oil',
    price: 13,
    category: 'vegan',
    image: 'https://images.pexels.com/photos/33593000/pexels-photo-33593000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'vegana',
    name: 'Vegana d\u2019Oro',
    description: 'San Marzano tomato, vegan mozzarella, roasted peppers, olives, capers, basil',
    price: 14,
    category: 'vegan',
    image: 'https://images.pexels.com/photos/33457563/pexels-photo-33457563.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'quattro',
    name: 'Quattro Stagioni',
    description: 'San Marzano tomato, artichokes, mushrooms, prosciutto, olives, fior di latte',
    price: 15,
    category: 'specialty',
    image: 'https://images.pexels.com/photos/5903100/pexels-photo-5903100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type EventItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

export const events: EventItem[] = [
  {
    id: 'pizza-night',
    title: 'Pizza Making Masterclass',
    date: 'March 15, 2026',
    description: 'Learn the art of Neapolitan dough from our pizzaiolo. Hands-on workshop with a three-course tasting menu and wine pairing.',
    image: 'https://images.pexels.com/photos/5056624/pexels-photo-5056624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'wine-pairing',
    title: 'Campania Wine Evening',
    date: 'April 2, 2026',
    description: 'A five-course tasting journey through the wines of Campania, paired with exclusive pizzas from our seasonal menu.',
    image: 'https://images.pexels.com/photos/313715/pexels-photo-313715.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'harvest-festival',
    title: 'Tomato Harvest Festival',
    date: 'August 20, 2026',
    description: 'Celebrate the San Marzano harvest with live music, outdoor dining, and a special menu featuring the first tomatoes of the season.',
    image: 'https://images.pexels.com/photos/8856555/pexels-photo-8856555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'anniversary',
    title: 'Forno d\u2019Oro Anniversary Gala',
    date: 'October 12, 2026',
    description: 'An elegant evening commemorating ten years of Forno d\u2019Oro. Champagne reception, live jazz, and a curated eight-course menu.',
    image: 'https://images.pexels.com/photos/17001772/pexels-photo-17001772.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const heroImages = {
  main: 'https://images.pexels.com/photos/29609013/pexels-photo-29609013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  dough: 'https://images.pexels.com/photos/32293385/pexels-photo-32293385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  oven: 'https://images.pexels.com/photos/10802332/pexels-photo-10802332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  interior: 'https://images.pexels.com/photos/17626467/pexels-photo-17626467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  table: 'https://images.pexels.com/photos/38779810/pexels-photo-38779810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  event: 'https://images.pexels.com/photos/4181649/pexels-photo-4181649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};
