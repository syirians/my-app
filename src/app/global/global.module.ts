import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {  ListKategoriComponent} from './components/list-kategori/list-kategori.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WebStorageModule } from 'ngx-store';
import { ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';



@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        RouterModule,
        WebStorageModule,
        Ng2CarouselamosModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        ListKategoriComponent
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        WebStorageModule,
        HeaderComponent,
        FooterComponent,
        ListKategoriComponent,
        Ng2CarouselamosModule,
    ]
})

export class GlobalModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: GlobalModule,
            providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: LOCALE_ID, useValue: 'id-ID' }]
        };
    }
}