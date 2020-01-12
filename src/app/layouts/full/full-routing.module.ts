import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullComponent } from './full.component';
import { AuthGuard } from '../../shared/guard/auth.guard';
export const routes: Routes = [
        {       path: '',
                component: FullComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: '',
                        loadChildren:
                        () => import('../../material-component/material.module').then(m => m.MaterialComponentsModule)
                    },
                    {
                        path: 'dashboard',
                        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
                    }
                ]
        }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FullRoutingModule {}