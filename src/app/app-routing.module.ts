import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin-dash',
    loadChildren: () => import('./admin-dash/admin-dash.module').then( m => m.AdminDashPageModule)
  },
  {
    path: 'agent-dash',
    loadChildren: () => import('./agent-dash/agent-dash.module').then( m => m.AgentDashPageModule)
  },
  {
    path: 'myhome',
    loadChildren: () => import('./myhome/myhome.module').then( m => m.MyhomePageModule)
  },
  {
    path: 'add-agent',
    loadChildren: () => import('./add-agent/add-agent.module').then( m => m.AddAgentPageModule)
  },
  {
    path: 'add-cargo',
    loadChildren: () => import('./add-cargo/add-cargo.module').then( m => m.AddCargoPageModule)
  },
  {
    path: 'display',
    loadChildren: () => import('./display/display.module').then( m => m.DisplayPageModule)
  },
  {
    path: 'display-agent',
    loadChildren: () => import('./display-agent/display-agent.module').then( m => m.DisplayAgentPageModule)
  },
  {
    path: 'display-cargo',
    loadChildren: () => import('./display-cargo/display-cargo.module').then( m => m.DisplayCargoPageModule)
  },
  {
    path: 'display-user',
    loadChildren: () => import('./display-user/display-user.module').then( m => m.DisplayUserPageModule)
  },
  {
    path: 'mycargo',
    loadChildren: () => import('./mycargo/mycargo.module').then( m => m.MycargoPageModule)
  },
  {
    path: 'myuser',
    loadChildren: () => import('./myuser/myuser.module').then( m => m.MyuserPageModule)
  },
  {
    path: 'add-company',
    loadChildren: () => import('./add-company/add-company.module').then( m => m.AddCompanyPageModule)
  },
  {
    path: 'nothing',
    loadChildren: () => import('./nothing/nothing.module').then( m => m.NothingPageModule)
  },
  {
    path: 'user-update/:id',
    loadChildren: () => import('./updates/user-update/user-update.module').then( m => m.UserUpdatePageModule)
  },
  {
    path: 'cargo-update/:id',
    loadChildren: () => import('./updates/cargo-update/cargo-update.module').then( m => m.CargoUpdatePageModule)
  },
  {
    path: 'agent-update/:id',
    loadChildren: () => import('./updates/agent-update/agent-update.module').then( m => m.AgentUpdatePageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./updates/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'update-password',
    loadChildren: () => import('./updates/update-password/update-password.module').then( m => m.UpdatePasswordPageModule)
  },
  {
    path: 'my-payment',
    loadChildren: () => import('./my-payment/my-payment.module').then( m => m.MyPaymentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
