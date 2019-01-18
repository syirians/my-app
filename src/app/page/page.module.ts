import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalModule } from '../global/global.module';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import * as ds from '.';

@NgModule({ 
	declarations : [ ds.HomeComponent ],
	imports: [ RouterModule.forChild([ {path:'', component: ds.HomeComponent } ]), GlobalModule.forRoot(),CommonModule],
	exports: [ RouterModule ]
})
export class HomeModule {}

@NgModule({ 
	declarations : [ ds.PerKategoriComponent ],
	imports: [ RouterModule.forChild([ {path:'', component: ds.PerKategoriComponent } ]), GlobalModule.forRoot(),CommonModule],
	exports: [ RouterModule ]
})
export class PerkategoriModule {}

@NgModule({ 
	declarations : [ ds.DetailPageComponent ],
	imports: [ RouterModule.forChild([ {path:'', component: ds.DetailPageComponent } ]), GlobalModule.forRoot(),CommonModule],
	exports: [ RouterModule ]
})
export class DetailPageModule {}

