// import { Routes } from '@angular/router';

// export const routes: Routes = [];




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationComponent } from './pages/recommendation/recommendation.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FilterComponent } from './pages/filter/filter.component';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'recommendation', component: RecommendationComponent  },
  {path: 'filter/:category', component: FilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
