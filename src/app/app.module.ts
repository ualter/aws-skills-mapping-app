import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwsServicesComponent } from './aws-services/aws-services.component';

const appRoutes: Routes = [
  { path: 'aws-services', component: AwsServicesComponent },
  { path: '', redirectTo: '/aws-services', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    AwsServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
