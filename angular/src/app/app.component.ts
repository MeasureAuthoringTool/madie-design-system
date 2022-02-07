import { Component } from '@angular/core';

import { appRoutes } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly routes = appRoutes;
}
