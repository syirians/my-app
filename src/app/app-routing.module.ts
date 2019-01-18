import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { routePage } from './page/path';

const routes: Routes = [
  ...routePage
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
