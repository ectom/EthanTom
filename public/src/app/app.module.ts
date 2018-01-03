import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PythonBeltComponent } from './python-belt/python-belt.component';
import { MeanBeltComponent } from './mean-belt/mean-belt.component';
import { TaskationComponent } from './taskation/taskation.component';
import { ErrorComponent } from './error/error.component';
import { ConstructionComponent } from './construction/construction.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ThehomeComponent } from './thehome/thehome.component';

@NgModule({
  declarations: [
    AppComponent,
    PythonBeltComponent,
    MeanBeltComponent,
    TaskationComponent,
    ErrorComponent,
    ConstructionComponent,
    ThankyouComponent,
    ThehomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
