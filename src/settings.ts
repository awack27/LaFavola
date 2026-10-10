import general from '../Settings/General/settings.json';
import impressum from '../Settings/Impressum/settings.json';
import services from '../Settings/Services/settings.json';
import ingredients from '../Settings/Ingredients/settings.json';
import previousEvents from '../Settings/PreviousEvents/settings.json';
import gallery from '../Settings/Gallery/settings.json';
import request from '../Settings/Request/settings.json';

export const settings = {
  restaurant: general,
  impressum,
  services,
  ingredients,
  previousEvents,
  gallery,
  request,
} as const;
