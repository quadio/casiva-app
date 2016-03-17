import {Component} from 'angular2/core';
import {ContactService} from '../../shared/services/contact.service';

@Component({
  moduleId: module.id,
  templateUrl: './contact.component.html'
})

export class ContactComponent {
  model = null;
  submitted = false;
  active = true;
  isValid = true;
  contactForm = null;

constructor(private contactService: ContactService) {
  this.model = null;
}

  validate(): void {
    this.isValid = false;
  }

  onSubmit(): void {
    this.submitted = true;
    this.active = false;
  }

}
