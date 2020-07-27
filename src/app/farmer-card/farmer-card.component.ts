import { Component, Input, OnInit } from '@angular/core';

import { FarmerService } from '../service/farmer.service';
import { FormBuilder, FormControl, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-farmer-card',
  templateUrl: './farmer-card.component.html',
  styleUrls: ['./farmer-card.component.css']
})
export class FarmerCardComponent implements OnInit {
  @Input() labelName: string;
  name = new FormControl();
  document = new FormControl();
  address = new FormControl();

  constructor(protected myFarmerSearchProvider: FarmerService) { }

  ngOnInit() {
    this.name.disable();
    this.document.disable();
    this.address.disable();
  }

  mySelectedFarmer(value) {
    const fullAddress = value.address.street
    ? `${value.address.street} - ${value.address.city} - ${value.address.state} - ${value.address.country}` : '';

    this.address.setValue(fullAddress);
    this.document.setValue(value.document.documentNumber);
    this.name.setValue(value.name);
  }

}
