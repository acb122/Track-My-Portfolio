import { AppComponent } from './components/app/app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/home'
    },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
function newFunction(): string {
    return 'path';
}
