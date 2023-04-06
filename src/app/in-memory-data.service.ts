import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Spiderman',puntos: 41 },
      { id: 13, name: 'Wonder Woman',puntos: 42 },
      { id: 14, name: 'Aquaman' ,puntos: 43},
      { id: 15, name: 'Deadpool' ,puntos: 44},
      { id: 16, name: 'Iron Man',puntos: 45},
      { id: 17, name: 'Batman',puntos: 46 },
      { id: 18, name: 'Flash' ,puntos: 47},
      { id: 19, name: 'Thor ' ,puntos: 48},
      { id: 20, name: 'Hulk' ,puntos: 49}
    ];
   
    return {heroes};
    
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
 
}