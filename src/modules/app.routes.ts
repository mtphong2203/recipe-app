import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from './shared/customer-layout/customer-layout.component';
import { ManagerLayoutComponent } from './shared/manager-layout/manager-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';

export const routes: Routes = [
    {
        path: 'manager',
        component: ManagerLayoutComponent,
        loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule)
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        component: CustomerLayoutComponent,
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
    }

];
