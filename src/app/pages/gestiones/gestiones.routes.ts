import { Routes } from "@angular/router";
import { AddGestionComponent } from "./add-gestion/add-gestion.component";
import { ListGestionesComponent } from "./list-gestiones/list-gestiones.component";

export const GestionesRoutes: Routes = [
    {path: '', title: 'Lista Gestiones', component: ListGestionesComponent},
    {path: 'add', title: 'Nueva Gestion', component: AddGestionComponent},
    {path: 'edit', title: 'Editar Gestion', component: AddGestionComponent},
];