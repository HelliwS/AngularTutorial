import { Component, Renderer2, ElementRef } from '@angular/core';
import { Hero } from '../models/herotutorial/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})

export class HeroFormComponent {

// //translate mouse for card
//   left = 0;
//   top = 0;
  
//   /**
//    *
//    * constructor to handle card translate
//    */
//   constructor(private elementRef: ElementRef,
//     private renderer: Renderer2
//   ) {}

//   ngAfterViewInit(){
//     const wrapperElement = this.elementRef.nativeElement;
//     const mouseMoveEvent = fromEvent(window, 'mousemove');

//     mouseMoveEvent.subscribe((event) => {
//       const centerX = window.innerWidth / 2;
//       const centerY = window.innerHeight / 2;
//       const xDiff = event.clientX - centerX;
//       const yDiff = event.ClientY - centerY;

//       this.left = xDiff + 'px';
//       this.top = yDiff + 'px';

//     });


//   }



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
