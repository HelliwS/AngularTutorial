import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingsubscribeComponent } from './testingsubscribe.component';

describe('TestingsubscribeComponent', () => {
  let component: TestingsubscribeComponent;
  let fixture: ComponentFixture<TestingsubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingsubscribeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
