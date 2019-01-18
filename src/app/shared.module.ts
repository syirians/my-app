import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { globalServices } from './global';

//Material Module
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MaterialModule } from './global/modules/material.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
@NgModule({
    imports: [
        MatCardModule,
        MatGridListModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MaterialModule,
        MatTabsModule,
        Ng2CarouselamosModule,
        MatCheckboxModule
    ],
    exports: [
        MatCardModule,
        MatGridListModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MaterialModule,
        MatTabsModule,
        Ng2CarouselamosModule,
        MatCheckboxModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: LOCALE_ID, useValue: 'id-ID' }]
        };
    }
}