import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './components/top/top.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { TopModule } from './components/top/top.module';
import { StopwatchsModule } from './components/top/stopwatchs/stopwatchs.module';
import { StopwatchsComponent } from './components/top/stopwatchs/stopwatchs.component';

const routes: Routes = [
  {
    path: 'stopwatchs',
    component: StopwatchsComponent,
  },
  { path: '', component: TopComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TopModule, StopwatchsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
