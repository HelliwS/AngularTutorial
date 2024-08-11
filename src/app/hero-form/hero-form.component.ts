import { Component } from '@angular/core';
import { Hero } from '../models/herotutorial/hero'

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {

  powers = ['Really Smart', 
  'Super Flexible', 
  'Super Hot',
  'Weather Changer'];

  model = new Hero (
  18, 
  'Dr. IQ', 
  this.powers[0],
  'Chuck Overstreet');

  submitted = false;

  onSubmit() 
  { 
    this.submitted = true; 
  }

  

  skyDog(): Hero {
    const myHero = new Hero(42, 'Skydog',
    'Fetch any object at any distance',
    'Leslie Rollover');
    console.log('My Hero is called ' + myHero.name);
    return myHero;
  }


  
}
