import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {OnboardComponent} from '../../onboard/components/onboard.component';
import {NameListService} from '../../shared/services/name-list.service';

@Component({
  selector: 'cs-app',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/onboard/...',
    name: 'Onboard',
    component: OnboardComponent,
    useAsDefault: true
  }
])
export class AppComponent {}
