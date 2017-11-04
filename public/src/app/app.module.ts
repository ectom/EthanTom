import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PythonBeltComponent } from './python-belt/python-belt.component';
import { MeanBeltComponent } from './mean-belt/mean-belt.component';
import { TaskationComponent } from './taskation/taskation.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ConstructionComponent } from './construction/construction.component';

@NgModule({
  declarations: [
    AppComponent,
    PythonBeltComponent,
    MeanBeltComponent,
    TaskationComponent,
    ErrorComponent,
    HomeComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
