import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

export const AppRoutes: Routes = [

        {     
            path: '',
            loadChildren: './layouts/full/full.module#FullModule',
            canActivate: [AuthGuard]
        },
        {
          path: 'login',
          loadChildren: './login/login.module#LoginModule'
        }
];
