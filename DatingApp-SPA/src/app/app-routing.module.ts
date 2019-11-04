import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  {   path:'home',component:HomeComponent },
  {   path:'members',component:MemberListComponent,canActivate:[AuthGuard]  },
  {   path:'messages',component:MessagesComponent,canActivate:[AuthGuard] },
  {   path:'lists',component:ListsComponent,canActivate:[AuthGuard] },
  {   path:'**', redirectTo:'home', pathMatch:'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
