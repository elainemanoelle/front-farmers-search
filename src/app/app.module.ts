import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  MatFormFieldModule,
  MatSliderModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatAutocompleteModule
} from '@angular/material';
import { FarmerSearchCardComponent } from './farmer-search-card/farmer-search-card.component';
import { FarmerCardComponent } from './farmer-card/farmer-card.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    FarmerSearchCardComponent,
    FarmerCardComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
