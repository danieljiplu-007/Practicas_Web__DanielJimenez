import { Routes } from '@angular/router';
import { EventosComponent } from './pages/eventos/eventos';

export const routes: Routes = [
  { path: '', component: EventosComponent },
  { path: 'eventos', component: EventosComponent }
];
