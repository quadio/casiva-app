import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Component} from 'angular2/core';
import {NavbarComponent} from './navbar.component';
import {TopnavComponent} from './topnav.component';
import {RegisterComponent} from '../../auth/components/register.component';
import {LoginComponent} from '../../auth/components/login.component';
import {OnboardComponent} from '../../onboard/components/onboard.component';
import {DashboardComponent} from '../../dashboard/components/dashboard.component';
import {NameListService} from '../../shared/services/name-list.service';
import {tokenNotExpired} from 'angular2-jwt';

@Component({
  selector: 'cs-app',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, TopnavComponent, NavbarComponent]
})

@RouteConfig([
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/onboard/...',
    name: 'Onboard',
    component: OnboardComponent
  },
  {
    path: '/auth/register/',
    name: 'Register',
    component: RegisterComponent
  },
  {
    path: '/auth/login/',
    name: 'Login',
    component: LoginComponent
  }
])

export class AppComponent {

  lock = new Auth0Lock('dRDUhIV64MvSXMQ1zrdGcc1zImOFKHaE', 'casiva.auth0.com');

  login() {
    this.lock.show(function(err:string, profile:string, id_token:string) {
      if(err) {
        throw new Error(err);
      }
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);
    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
