import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes:Routes = [
    {
        path:'landing',
        component: LandingComponent,
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo:'landing'
    }
]



@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }