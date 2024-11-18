import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from './shared/customer-layout/customer-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: CustomerLayoutComponent,
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
    }
];
