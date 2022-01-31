import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 30 , 0, -5]);
const stringCollection = new StringCollection('acbdFXzU');
const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(-3);
linkedList.add(500);
linkedList.add(-10);

numbersCollection.sort();
stringCollection.sort();
linkedList.sort();

numbersCollection.print();
stringCollection.print();
linkedList.print();