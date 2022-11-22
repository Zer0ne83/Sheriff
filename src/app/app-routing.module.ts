import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
////////////////////////////////////////////////////////////////////////////////////////////
const routes: Routes = [
	{path:'',redirectTo:'/auth',pathMatch:'full'},
	///// AUTH /////
  {path:'auth',loadChildren:() => import('./auth/auth.module').then(m => m.AuthPageModule)},
  ///// TABS /////
  {path:'tabs',loadChildren:() => import('./tabs/tabs.module').then(m => m.TabsPageModule),canLoad:[AuthGuard]},
  ///// PAGES /////
  {path:'settings',loadChildren:()=>import('./settings/settings.module').then(m => m.SettingsPageModule),canLoad:[AuthGuard]},
  {path:'profile',loadChildren:()=>import('./profile/profile.module').then(m => m.ProfilePageModule),canLoad:[AuthGuard]},
  {path:'people',loadChildren:()=>import('./people/people/people.module').then( m => m.PeoplePageModule),canLoad:[AuthGuard]},
  {path:'pay',loadChildren:()=>import('./pay/pay.module').then(m=>m.PayPageModule),canLoad:[AuthGuard]},
  {path:'serverlog',loadChildren:()=>import('./serverlog/serverlog.module').then(m => m.ServerlogPageModule),canLoad:[AuthGuard]},
  {path:'snoop',loadChildren:()=>import('./snoop/snoop.module').then(m => m.SnoopPageModule),canLoad:[AuthGuard]},
  ///// MODALS /////  
  // FirstRun
    {path:'firstrun',loadChildren:() => import('./modals/firstrun/firstrun.module').then(m => m.FirstRunPageModule),canLoad:[AuthGuard]},
  // DateRange
    {path:'daterange',loadChildren:() => import('./modals/daterange/daterange.module').then(m => m.DateRangePageModule),canLoad:[AuthGuard]},
  // TSheets
    {path:'tsheet-detail',loadChildren:() => import('./modals/detail/tsheet-detail/tsheet-detail.module').then(m => m.TSheetDetailPageModule),canLoad:[AuthGuard]},
    {path:'tsheet-add',loadChildren:() => import('./modals/detail/tsheet-detail/tsheet-add/tsheet-add.module').then(m => m.TSheetAddPageModule),canLoad:[AuthGuard]},
    {path:'tsheet-breaks',loadChildren:() => import('./modals/detail/tsheet-detail/tsheet-breaks/tsheet-breaks.module').then(m => m.TSheetBreaksPageModule),canLoad:[AuthGuard]},
    {path:'tsheet-history',loadChildren:() => import('./modals/detail/tsheet-detail/tsheet-history/tsheet-history.module').then(m => m.TSheetHistoryPageModule),canLoad:[AuthGuard]},
  // Rosters
    {path:'roster-detail',loadChildren:() => import('./modals/detail/roster-detail/roster-detail.module').then(m => m.RosterDetailPageModule),canLoad:[AuthGuard]},
  // Tasks
    {path:'task-add',loadChildren:() => import('./modals/detail/task-add/task-add.module').then(m => m.TaskAddPageModule),canLoad:[AuthGuard]},
    {path:'taskassignee',loadChildren:() => import('./modals/detail/task-add/taskassignee/taskassignee.module').then(m => m.TaskAssigneePageModule),canLoad:[AuthGuard]},
  // News/Memos
    {path:'news-detail',loadChildren:() => import('./modals/detail/news-detail/news-detail.module').then(m => m.NewsDetailPageModule),canLoad:[AuthGuard]},
    {path:'news-add',loadChildren:() => import('./modals/detail/news-detail/news-add/news-add.module').then(m => m.NewsAddPageModule),canLoad:[AuthGuard]},
    {path:'recipients',loadChildren:() => import('./modals/detail/news-detail/news-add/recipients/recipients.module').then(m => m.RecipientsPageModule),canLoad:[AuthGuard]}
];
////////////////////////////////////////////////////////////////////////////////////////////
@NgModule({
	imports:[RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,enableTracing:false})],
	exports:[RouterModule]
})
export class AppRoutingModule {}
////////////////////////////////////////////////////////////////////////////////////////////