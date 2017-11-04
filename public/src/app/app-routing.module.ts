import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PythonBeltComponent } from './python-belt/python-belt.component';
import { MeanBeltComponent } from './mean-belt/mean-belt.component';
import { TaskationComponent } from './taskation/taskation.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ConstructionComponent } from './construction/construction.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
        children: []
    },
    {
        path: 'Python-Belt-Exam',
        pathMatch: 'full',
        component: PythonBeltComponent,
        children: []
    },
    {
        path: 'MEAN-Belt-Exam',
        pathMatch: 'full',
        component: MeanBeltComponent,
        children: []
    },
    {
        path: 'taskation',
        pathMatch: 'full',
        component: ConstructionComponent,
        children: []
    },
    {
        path: '**',
        pathMatch: 'full',
        component: ErrorComponent,
        children: []
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
