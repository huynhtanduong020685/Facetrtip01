import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'locals',
        children: [
          {
            path: '',
            loadChildren: '../locals/locals.module#LocalsPageModule'
          },
          {
            path: ':id',
            loadChildren: '../local-details/local-details.module#LocalDetailsPageModule'
          }
        ]
      },
      {
        path: 'main',
        children: [
          {
            path: '',
            loadChildren: '../main/main.module#MainPageModule'
          }
        ]
      },
      {
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: '../chat/chat.module#ChatPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/locals',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class TabsPageRoutingModule { }
