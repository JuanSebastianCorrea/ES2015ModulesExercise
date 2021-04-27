import fruits from './foods';
import { choice, remove } from './helpers';

const randFruit = remove(fruits, choice(fruits));
console.log(`I'd like one ${randFruit}, please`);
console.log(`Here you go: ${randFruit}`);
console.log('Delicious!, May I have another?');
console.log(`Sorry, we're all out. We have ${fruits.length} other fruits`);
