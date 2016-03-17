import {Component} from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
  moduleId: module.id,
  templateUrl: './property.component.html',
  directives: [FORM_DIRECTIVES]
})

export class PropertyComponent {

  submitted = false;
  active = true;
  isValid = true;

  onSubmit() {
    this.submitted = true;
    this.active = false;
  }

}
