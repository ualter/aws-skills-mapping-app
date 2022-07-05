import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsServicesComponent } from './aws-services.component';

describe('AwsServicesComponent', () => {
  let component: AwsServicesComponent;
  let fixture: ComponentFixture<AwsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
