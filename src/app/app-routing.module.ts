import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import { GpuComponent } from './components/gpu/gpu.component';


const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'portfolio'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'gpu',
    component: GpuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
