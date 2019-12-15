import { Injectable } from '@angular/core';
import {Hero} from './heroes/hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';
//used in http requests
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable,of} from 'rxjs';
//works dependency injection system
//provide injectable services and have own injectable dependencies
//basically your action/reducer setup
//this will handle gathering data etc. so components don't need to worry about the service
//provided in registers where the service is available the provider
//register it in root creates single instance and is shared amongst all classes
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'https://localhost:44328/api/hero';
  //this would be like the get action
  //return observable that returns a hero array
  //similar to c# tasks?
  getHeroes():Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heros');
    //returns the observable which returns single value the hero array
    //return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  getHero(id: number):Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  private log(message:string){
    this.messageService.add('HeroService: ' + message);
  }
  //inject the message service into this service which is then injected into the heroes component
  constructor(private messageService:MessageService, private http:HttpClient) { }
}
