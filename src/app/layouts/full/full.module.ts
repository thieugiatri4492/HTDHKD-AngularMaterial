import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FullRoutingModule } from './full-routing.module';
import { FullComponent } from './full.component';
import { AppHeaderComponent } from './header/header.component';
import { AppSidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../../shared/shared.module';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FullRoutingModule,
        SharedModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    declarations: [FullComponent, AppHeaderComponent,AppSidebarComponent ]

})
export class FullModule { }