import { Routes, RouterModule } from "@angular/router";
import {LoginComponent} from './login/components/login.component';
import {LogsComponent} from './log/components/logs.component';
import {AuthGuard} from './app.component';
const APP_ROUTES : Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: LogsComponent,canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

export const routing = [RouterModule.forRoot(APP_ROUTES)]
