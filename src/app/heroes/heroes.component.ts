import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from '../hero.service';
//import {HEROES} from '../mock-heroes';
//annote component symbol
//metadata properties
//selector is components css element selector
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
//always export class like in react
export class HeroesComponent implements OnInit {
  //properties for the class
  //heroes = HEROES;
  //declare heroes array prop
  heroes: Hero[];
  /*
  hero: Hero = {
    id:1,
    name:'Windstorm'
  }
  
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  */
  getHeroes():void{
    //basically a promise setup
    //when the observable is ommited the callback is called
    //in this case the callback assigns this.heroes to heroes from the observable
    //again basically the same as how a promise works
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  
  }

  //use this if constructor
  //hero = new Hero(1,"windstorm");
  //this will add instance to the hero service when the component is created
  //bad practice to call function in constructor
  constructor(private heroService:HeroService) { }
  //called after creating component init logic
  //call any init functions here, get requests etc.
  ngOnInit() {
    this.getHeroes();
  }

}
