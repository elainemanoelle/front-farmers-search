import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, FormControlName } from '@angular/forms';

import { FarmerSearchAbstractProvider } from '../provider/farmer-search-abstract-provider';

@Component({
  selector: 'app-farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;
  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() onFarmerSelectedEvent: EventEmitter<any> = new EventEmitter();
  @Output() searchReset: EventEmitter<any> = new EventEmitter();
  searchParam = new FormControl();
  options = [];

  constructor() { }

  ngOnInit() {
  }

  searchSugestions() {
    if (this.searchParam.value && this.searchParam.value.length >= 3) {
      const result = this.farmerSearchAbstractProvider.searchFarmers(this.searchParam.value);
      result.then((data) => {
        this.options = data;
      }).catch((e) => {
        console.log('ERROR: ', e);
        this.options = [];
      });
    }
  }

  clickOption(option) {
    this.onFarmerSelectedEvent.next(option);
    this.searchParam.setValue(option.name);
  }

  clear() {
    if ( this.searchParam.value ) {
      this.searchParam.setValue(null);
      this.searchReset.next();
    }
  }

}
