import { User } from './User';
import { Company } from './Company';
import { GMap } from './GMap';

const map = new GMap('map');
map.addMarker(new User());
map.addMarker(new Company());
