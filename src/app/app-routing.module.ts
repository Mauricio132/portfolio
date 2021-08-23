import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/pages/profile/profile.component';
import { Error404Component } from './shared/components/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    pathMatch: 'full',
  },
  {
    path: 'gifs',
    loadChildren: () => import('./gifs/gifs.module').then((m) => m.GifsModule),
  },
  {
    path: 'country',
    loadChildren: () =>
      import('./country/country.module').then((m) => m.CountryModule),
  },
  {
    path: 'pipe',
    loadChildren: () =>
      import('./pipes/pipes.module').then((m) => m.PipesModule),
  },
  {
    path: 'reactive-form',
    loadChildren: () =>
      import('./reactive-form/reactive-form.module').then(
        (m) => m.ReactiveFormModule
      ),
  },
  /*
  { pathMatch:'heroes'},
  { pathMatch:'maps'},
  { pathMatch:'graphic'},*/
  {
    path: 'course',
    loadChildren: () =>
      import('./course/course.module').then((m) => m.CourseModule),
  },
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
