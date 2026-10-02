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
    title: 'Forno d’Oro Anniversary Gala',
    date: 'October 12, 2026',
    description: 'An elegant evening commemorating ten years of Forno d’Oro. Champagne reception, live jazz, and a curated eight-course menu.',
    image: 'https://images.pexels.com/photos/17001772/pexels-photo-17001772.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const heroImages = {
  dough: 'https://images.pexels.com/photos/32293385/pexels-photo-32293385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};
