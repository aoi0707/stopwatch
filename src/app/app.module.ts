import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { StopwatchsComponent } from './components/top/stopwatchs/stopwatchs.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    StopwatchsComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
