import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {ContactComponent} from './contact.component';

@Component({
  moduleId: module.id,
  templateUrl: './onboard.component.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/contact', name: 'Contact',  component: ContactComponent, useAsDefault: true  }
])

export class OnboardComponent {}
