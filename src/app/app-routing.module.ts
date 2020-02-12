import {NgModule} from '@angular/core';
import {AuthGuard} from './auth/auth.guard';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {AboutComponent} from './about/about.component';
import {ElseComponent} from './else/else.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'user/:id', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'else', component: ElseComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
