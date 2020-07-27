import { Component, OnInit } from '@angular/core';

import { FarmerService } from '../service/farmer.service';
import { FormBuilder, FormControl, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-farmer-card',
  templateUrl: './farmer-card.component.html',
  styleUrls: ['./farmer-card.component.css']
})
export class FarmerCardComponent implements OnInit {
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
    this.name.setValue(value.name);
    this.document.setValue(value.document_number);
    this.address.setValue(value.street);
  }

}
