//import input to make it able to bind as child to parent
//basically get props like in react
import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../heroes/hero';
//holds info about the route to this instance of hero detail component
//use to get id
import {ActivatedRoute} from '@angular/router';
//service for interacting with browser
//in this case just use it to go back
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //recieves hero input basically prop and uses that in the html
  @Input() hero:Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService,private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  goBack(): void{
    this.location.back();
  }

  getHero(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }
}
