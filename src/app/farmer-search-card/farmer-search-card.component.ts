import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { MatAutocompleteTrigger, DateAdapter } from '@angular/material';
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

        const data = {
          id: null,
          document: {
            documentNumber: '',
            documentType: '',
          },
          address: {
            street: '',
            state: '',
            city: '',
            country: ''
          }
        };

        this.onFarmerSelectedEvent.next(data);
        return false;
      });

      return true;
    }
  }

  clickOption(option) {
    this.onFarmerSelectedEvent.next(option);
    this.searchParam.setValue(option.name);
  }

  clear() {
    if ( this.searchParam.value ) {
      this.searchParam.setValue(null);

      const data = {
        id: null,
        name: '',
        document: {
          documentNumber: '',
          documentType: '',
        },
        address: {
          street: '',
          state: '',
          city: '',
          country: ''
        }
      };

      this.onFarmerSelectedEvent.next(data);
    }
  }

}
