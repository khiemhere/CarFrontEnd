import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('../components/dashbroard/dashboard.component').then(
                        m => m.DashboardComponent
                    ),
            },
            {
                path: 'contract',
                loadComponent: () =>
                    import('../components/car-contract/car-contract.component').then(
                        m => m.CarContractComponent
                    ),
            },



            { path: '**', redirectTo: '' },
        ]
    }
];
