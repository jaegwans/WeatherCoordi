import { atom } from 'recoil';

let countState = atom({
  key: 'counter',
  default: 0, 
});