import { Routes } from '@angular/router';
import { Ejemplo1Component } from './ejemplos/ejemplo-1/ejemplo-1.component';
import { Ejemplo2Component } from './ejemplos/ejemplo-2/ejemplo-2.component';
import { Ejemplo3Component } from './ejemplos/ejemplo-3/ejemplo-3.component';
import { Ejemplo4Component } from './ejemplos/ejemplo-4/ejemplo-4.component';
import { Ejemplo5Component } from './ejemplos/ejemplo-5/ejemplo-5.component';
import { ExamenComponent } from './examen/examen.component';

export const routes: Routes = [
    {path: 'ejemplo-1', component: Ejemplo1Component},
    {path: 'ejemplo-2', component: Ejemplo2Component},
    {path: 'ejemplo-3', component: Ejemplo3Component},
    {path: 'ejemplo-4', component: Ejemplo4Component},
    {path: 'ejemplo-5', component: Ejemplo5Component},
    {path: 'examen',component:ExamenComponent}
];
