import { Routes} from "@angular/router";

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'gestiones',
        pathMatch: 'full',
    },
    {
        path: 'gestiones',
        loadChildren: () => import('./pages/gestiones/gestiones.routes').then((routes) => routes.GestionesRoutes),
    }
]