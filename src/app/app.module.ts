import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Les02Component } from './les02/les02.component';
// import { Les02TaskComponent } from './les02-task/les02-task.component';
import { AngularTaskListComponent } from './angular-task-list/angular-task-list.component';
// import { ChildListComponent } from './angularTaskList/child-list/child-list.component';
import { ChildListComponent } from './angular-task-list/child-list/child-list.component';


@NgModule({
  declarations: [
    AppComponent,
    Les02Component,
    // Les02TaskComponent,
    AngularTaskListComponent,
    ChildListComponent
    // ChildListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
