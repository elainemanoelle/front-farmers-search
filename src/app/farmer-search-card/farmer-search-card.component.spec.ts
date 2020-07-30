import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FarmerSearchCardComponent } from './farmer-search-card.component';
import { FarmerService } from '../service/farmer.service';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatSliderModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatAutocompleteModule
} from '@angular/material';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

export let options: Partial<IConfig> | (() => Partial<IConfig>);


describe('FarmerSearchCardComponent', () => {
  let component: FarmerSearchCardComponent;
  let fixture: ComponentFixture<FarmerSearchCardComponent>;
  let farmerService: FarmerService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FarmerSearchCardComponent
      ],
      providers: [FarmerService],
      imports: [
        HttpClientTestingModule,
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

    farmerService = TestBed.get(FarmerService);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSearchCardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component FarmerSearchCard', () => {
    expect(component).toBeTruthy();
  });

  it('should call search farmers by parameter passed and return true if any records were found',
  fakeAsync(() => {

      component.farmerSearchAbstractProvider = farmerService;
      component.searchParam.setValue('silva');

      let returnSearch = component.searchSugestions();

      const req = httpTestingController.expectOne(
          `http://localhost:3000/farmers/${component.searchParam.value}`
      );

      expect(req.request.method).toEqual('GET');

      tick();

      expect(returnSearch).toBeTruthy();
  })
  );
});
