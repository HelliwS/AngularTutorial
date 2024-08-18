import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { CanvasBoxComponent } from './components/canvas-box/canvas-box.component';
import { TestingsubscribeComponent } from './testingsubscribe/testingsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    CanvasBoxComponent,
    TestingsubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
