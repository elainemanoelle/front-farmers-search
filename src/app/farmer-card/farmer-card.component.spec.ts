import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCardComponent } from './farmer-card.component';
import { FarmerSearchCardComponent } from '../farmer-search-card/farmer-search-card.component';

import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatAutocompleteModule
} from '@angular/material';
import { NgxMaskModule, IConfig } from 'ngx-mask';
export let options: Partial<IConfig> | (() => Partial<IConfig>);

describe('FarmerCardComponent', () => {
  let component: FarmerCardComponent;
  let fixture: ComponentFixture<FarmerCardComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FarmerCardComponent,
        FarmerSearchCardComponent
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        BrowserModule,
        FormsModule,
        MatCardModule,
        MatSliderModule,
        HttpClientModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        NgxMaskModule.forRoot(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerCardComponent);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    component.labelName = 'Destinatário';
    fixture.detectChanges();
  });

  it('should create the component FarmerCard', () => {
    expect(component).toBeTruthy();
  });

  it('Check the page\'s main label', () => {
    const de = fixture.debugElement.query(By.css('.title-page')).nativeElement;

    expect(de.innerText).toContain('Elaine\'s Test For Bayer');
  });

  it('Verify if there is 4 inputs', () => {
    expect(fixture.debugElement.queryAll(By.css('.mat-form-field-label')).length).toEqual(4);
  });

  it('First input label should be \'Nome or Doc #\'', () => {
    const allInputLabels = fixture.debugElement.queryAll(By.css('.mat-form-field-label'));
    expect(allInputLabels[0].nativeElement.innerText).toContain('Nome or Doc #');
  });

  it('Second input label should contain the value passed through the parameter, in this case \'Destinatário\'', () => {
    const allInputLabels = fixture.debugElement.queryAll(By.css('.mat-form-field-label'));

    expect(allInputLabels[1].nativeElement.innerText).toContain('Destinatário');
  });

  it('Third input label should be \'Doc #\'', () => {
    const allInputLabels = fixture.debugElement.queryAll(By.css('.mat-form-field-label'));
    expect(allInputLabels[2].nativeElement.innerText).toContain('Doc #');
  });

  it('Fouth input label should be \'Endereço\'', () => {
    const allInputLabels = fixture.debugElement.queryAll(By.css('.mat-form-field-label'));
    expect(allInputLabels[3].nativeElement.innerText).toContain('Endereço');
  });

});
