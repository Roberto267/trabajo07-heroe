import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, puntos: number): void {
    //trim elimina los espacion en blanco en los extremos del string
    name = name.trim();
    if (!name || !puntos) { return; }
    this.heroService.addHero({ name,puntos } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
      this.heroes.sort();
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  ordenar(): void{
    this.heroes.sort(this.sortFunc);
    this.heroService.sort();
  }
  sortFunc(a: { puntos: number; }, b: { puntos: number; }){
    if ( a.puntos < b.puntos ){
      return 1;
    }
    if ( a.puntos > b.puntos ){
      return -1;
    }
    return 0;
  }

}