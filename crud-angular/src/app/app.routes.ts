import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListComponentComponent } from './components/list-component/list-component.component';

export const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListComponentComponent }
];
